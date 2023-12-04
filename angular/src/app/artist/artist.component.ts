
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  mbid: string = '';
  artist: any = [];

  constructor(private route: ActivatedRoute) {};

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.mbid = params['mbid'];
      this.fetchArtist();
    });
  };

  fetchArtist = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/artists/${this.mbid}/setlists`, {
        params: {
          artistId: this.mbid
        }
      });
      this.artist = response.data.setlist;
    }
    catch (err) {
      console.error(err);
    };
  };

  toggleSetlist(data: any) {
    data.displaySetlist = !data.displaySetlist;
  };
};