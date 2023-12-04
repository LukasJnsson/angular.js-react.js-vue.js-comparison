
import { Component } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  placeholder: string = "city";
  searchValue: string = '';
  cities: any = [];

  handleSearch(value: string) {
    this.searchValue = value;
    this.fetchCities();
  };

  fetchCities = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/search/cities', {
        params: {
          city: this.searchValue
        }
      });
      this.cities = response.data.cities;
    }
    catch (err) {
      console.error(err);
    };
  };
};