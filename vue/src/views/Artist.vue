<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';


const route = useRoute();
let artist = ref<any[]>([]);

const fetchArtist = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/api/v1/artists/${route.params.id}/setlists`, {
      params: {
        artistId: route.params.id
      }
    });
    artist.value = response.data.setlist;
  }
  catch (err) {
    console.error(err);
  };
};

const toggleShowSongs = (data:any) => {
  data.showSongs = !data.showSongs;
};

// equal to the 'useEffect' hook
onMounted(async () => {
  await fetchArtist();
});
</script>

<template>
  <Navbar />
    <main>
      <div v-if="artist.length > 0">
        <h1>{{ artist[0].artist.name }} setlists</h1>
          <v-list-item v-for="data in artist" :key="data.id">
              <v-table>
                <thead>
                  <tr>
                    <th @click="toggleShowSongs(data)"> {{ data.artist.name }} at {{ data.venue.name }} 
                      ({{ data.venue.city.name }}, {{ data.venue.city.country.name }})
                    </th>
                  </tr>
                </thead>
                  <tbody v-if="data.showSongs">
                    <tr v-for="(item, index) in data.sets.set[0].song" :key="item.name">
                      <td>{{ index + 1 }}. {{ item.name }}</td>
                    </tr>
                  </tbody>
              </v-table>
          </v-list-item>
      </div>
      <div v-else>
        <p>loading...</p>
      </div>
    </main>
  <Footer />
</template>