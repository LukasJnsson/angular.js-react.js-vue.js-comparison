
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VenueComponent } from './venue/venue.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { CityComponent } from './city/city.component';
import { TableComponent } from './table/table.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InputComponent } from './input/input.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ArtistComponent } from './artist/artist.component';
import {MatTableModule} from '@angular/material/table';
import { SetlistsincityComponent } from './setlistsincity/setlistsincity.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VenueComponent,
    NavbarComponent,
    MapComponent,
    CityComponent,
    InputComponent,
    ArtistComponent,
    TableComponent,
    SetlistsincityComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {};