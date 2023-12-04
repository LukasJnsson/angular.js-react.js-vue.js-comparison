
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-setlistsincity',
  templateUrl: './setlistsincity.component.html',
  styleUrls: ['./setlistsincity.component.css']
})
export class SetlistsincityComponent implements OnInit {
  id: string = '';
  setlists: any = [];

  constructor(private route: ActivatedRoute) {};

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.fetchSetlistsInCity();
    });
  };

  fetchSetlistsInCity = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/search/cityId`, {
        params: {
          cityId: this.id
        }
      });
      this.setlists = response.data.setlist;
    }
    catch (err) {
      console.error(err);
    };
  };

  toggleSetlist(data: any) {
    data.displaySetlist = !data.displaySetlist;
  };
};