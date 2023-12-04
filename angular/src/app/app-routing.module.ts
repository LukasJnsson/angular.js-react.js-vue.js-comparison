
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VenueComponent } from './venue/venue.component';
import { CityComponent } from './city/city.component';
import { SetlistsincityComponent } from './setlistsincity/setlistsincity.component';
import { MapComponent } from './map/map.component';
import { ArtistComponent } from './artist/artist.component';
import { ErrorComponent } from './error/error.component';


// https://angular.io/guide/router
const routes: Routes = [
  {
    path: '', 
    title: 'Home', 
    component: HomeComponent 
  },
  {
    path: 'artists/:mbid',
    title: 'Artist',
    component: ArtistComponent
  },
  {
    path: 'venues', 
    title: 'Venues', 
    component: VenueComponent 
  },
  {
    path: 'cities', 
    title: 'Cities', 
    component: CityComponent
  },
  {
    path: 'cities/:id',
    title: 'CitiesId',
    component: SetlistsincityComponent
  },
  {
    path: 'maps', 
    title: 'Maps', 
    component: MapComponent
  },
  {
    path: '**',
    title: 'Error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};