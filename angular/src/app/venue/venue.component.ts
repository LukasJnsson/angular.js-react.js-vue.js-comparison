
import { Component } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent {
  placeholder: string = "venue";
  searchValue: string = '';
  venues: any = [];

  handleSearch(value: string) {
    this.searchValue = value;
    this.fetchVenues();
  };

  fetchVenues = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/search/venues', {
        params: {
          venue: this.searchValue
        }
      });
      this.venues = response.data.venue;
    }
    catch (err) {
      console.error(err);
    };
  };
};