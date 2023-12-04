
import { Component } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  placeholder: string = "artist";
  searchValue: string = '';
  artists: any = [];

  handleSearch(value: string) {
    this.searchValue = value;
    this.fetchArtists();
  };
  
  fetchArtists = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/search/artists', {
        params: {
          artist: this.searchValue
        }
      });
      this.artists = response.data.artist;
    }
    catch (err) {
      console.error(err);
    };
  };
};