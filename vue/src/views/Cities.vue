<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import Input from '../components/Input.vue';
import Footer from '../components/Footer.vue';


let cities = ref<any[]>([]);
const searchString = ref('');

const fetchCities = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/search/cities', {
      params: {
        city: searchString.value
      }
    });
    cities.value = response.data.cities;
  }
  catch (err) {
    console.error(err);
  };
};

const handleSearch = async () => {
  await fetchCities();
};
</script>

<template>
  <Navbar />
    <main>
      <h1>Cities</h1>
        <Input placeholder="cities" v-model="searchString" @keyup.enter="handleSearch" />
          <v-list v-if="cities.length > 0" lines="one">
            <v-list-item v-for="(city) in cities" :key="city.id">
              <RouterLink :to="{ name: 'citiesId', params: { id: city.id } }">
                {{ city.name }} ({{ city.state }}, {{ city.country.name }})
            </RouterLink>
            </v-list-item>
          </v-list>
    </main>
  <Footer />
</template>