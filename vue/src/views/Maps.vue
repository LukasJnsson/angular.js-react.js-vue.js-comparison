<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';
import { ref } from 'vue';
import axios from 'axios';
import L from 'leaflet';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';


let userClickedOnMap = ref(false);
let setlistsInCity = ref<any[]>([]);
let cityName = ref('');

const fetchSetlistsInCity = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/api/v1/search/cityName/${cityName.value}`, {
      params: {
        cityName: cityName.value
      }
    });
    setlistsInCity.value = response.data.setlist;
  }
  catch (err) {
    console.error(err);
  };
};

const handleConcertsInArea = async (concertInArea: boolean) => {
  userClickedOnMap.value = true;
  if (!concertInArea) {
    setlistsInCity.value = ["There are no concerts in this area"];
  }
  else {
    await fetchSetlistsInCity();
  }
};

onMounted(async () => {
  var map = L.map('map').setView([55.5845, 12.9968], 6);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>'
  }).addTo(map);
  var popup = L.popup();
  var circle: L.Circle | null = null;

  async function onMapClick(e: L.LeafletMouseEvent) {
    if (circle) {
      map.removeLayer(circle);
    }
    setlistsInCity.value = [];

    circle = L.circle(e.latlng, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.5,
      radius: 10000
    }).addTo(map);
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString() + " Recent setlists in this area are listed below")
      .openOn(map);

    const { lat, lng } = e.latlng;
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=e1fd90b1c0f9411d87295dd0a123240f&pretty=1`);
      const results = response.data.results;
      let cityNameString = results[0].components.city;
      cityName.value = cityNameString;
      let areConcerts = false;

      if (typeof cityName !== "undefined") {
        areConcerts = true;
        handleConcertsInArea(areConcerts);
      }
    } catch (error) {
      console.error('Error with reverse geocoding:', error);
    }
  }
  map.on('click', onMapClick);
});
</script>

<template>
  <Navbar />
    <main>
        <h1>Map</h1>
        <div id="map"></div>
        <h2>Recent setlists in selected area</h2>
          <v-list v-if="setlistsInCity.length > 0" lines="one">
            <v-list-item v-for="(setlist) in setlistsInCity" :key="setlist.id">
              <RouterLink :to="{ name: 'artistsId', params: { id: setlist.artist.mbid } }">
              {{ setlist.artist.name }}
              </RouterLink>
            </v-list-item>
          </v-list>
    </main>
  <Footer />
</template>

<style>
#map {
    height:400px;
    z-index: 0;
}
</style>