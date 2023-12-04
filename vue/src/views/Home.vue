<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import Input from '../components/Input.vue';
import Footer from '../components/Footer.vue';


// state
let artists = ref<any[]>([]);
const searchString = ref('');

// actions
const fetchArtists = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/search/artists', {
      params: {
        artist: searchString.value
      }
    });
    artists.value = response.data.artist;
  }
  catch (err) {
    console.error(err);
  };
};

// event handler
const handleSearch = async () => {
  await fetchArtists();
};
</script>

<!-- 
':' used for binding the data prop to the state variable
'@' used for implementing event handler
-->
<template>
  <Navbar />
    <main>
      <h1>Home</h1>
      <Input placeholder="artist" v-model="searchString" @keyup.enter="handleSearch" />
        <v-list v-if="artists.length > 0" lines="one">
          <v-list-item v-for="(artist) in artists" :key="artist.mbid">
            <RouterLink :to="{ name: 'artistsId', params: { id: artist.mbid } }">
              {{ artist.name }}
            </RouterLink>
          </v-list-item>
        </v-list>
    </main>
  <Footer />
</template>