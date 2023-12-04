<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import Input from '../components/Input.vue';
import Footer from '../components/Footer.vue';


let venues = ref<any[]>([]);
const searchString = ref('');

const fetchVenues = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/search/venues', {
      params: {
        venue: searchString.value
      }
    });
    venues.value = response.data.venue;
  }
  catch (err) {
    console.error(err);
  };
};

const handleSearch = async () => {
  await fetchVenues();
};
</script>

<template>
  <Navbar />
    <main>
      <h1>Venues</h1>
        <Input placeholder="venues" v-model="searchString" @keyup.enter="handleSearch" />
          <v-list v-if="venues.length > 0" lines="one">
            <v-list-item v-for="(venue) in venues" :key="venue.mbid">
              <a target='_blank' :href="venue.url">{{ venue.name }} ({{ venue.city.name }}, {{ venue.city.country.name }})</a>
            </v-list-item>
          </v-list>
    </main>
  <Footer />
</template>