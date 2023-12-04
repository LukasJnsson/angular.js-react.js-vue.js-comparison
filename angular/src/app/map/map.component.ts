
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map!: L.Map;
  userClickedOnMap: boolean = false;
  setlistsInCity: any[] = [];
  cityName: string = '';
  private circle: L.Circle | null = null;

  ngOnInit() {
    this.initializeMap();
  };

  private initializeMap(): void {
    this.map = L.map('map').setView([55.5845, 12.9968], 6);

    const tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>'
    });
    tileLayer.addTo(this.map);

    this.map.on('click', this.onMapClick.bind(this));
  };

  private onMapClick(e: L.LeafletMouseEvent): void {
    if (this.circle) {
      this.map.removeLayer(this.circle);
    };

    this.setlistsInCity = [];
    this.circle = L.circle(e.latlng, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.5,
      radius: 10000
    }).addTo(this.map);

    const { lat, lng } = e.latlng;

    this.reverseGeocode(lat, lng).then(cityName => {
      if (cityName) {
        this.cityName = cityName;
        this.handleConcertsInArea(true);
      } else {
        this.handleConcertsInArea(false);
      };
    });
  };

  private reverseGeocode(lat: number, lng: number): Promise<string> {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=e1fd90b1c0f9411d87295dd0a123240f&pretty=1`;

    return axios.get(url)
      .then(response => {
        const results = response.data.results;
        return results[0].components.city;
      })
      .catch(error => {
        console.error('Error with reverse geocoding:', error);
        return '';
      });
  };

  private async fetchSetlistsInCity(): Promise<void> {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/search/cityName/${this.cityName}`, {
        params: {
          cityName: this.cityName
        }
      });
      this.setlistsInCity = response.data.setlist;
    } catch (err) {
      console.error(err);
    };
  };

  private handleConcertsInArea(concertInArea: boolean): void {
    this.userClickedOnMap = true;

    if (!concertInArea) {
      this.setlistsInCity = ["There are no concerts in this area"];
    } else {
      this.fetchSetlistsInCity();
    };
  };
};