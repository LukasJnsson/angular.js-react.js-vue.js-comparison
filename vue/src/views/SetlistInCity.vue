<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';


const route = useRoute();
let setlists = ref<any[]>([]);

const fetchSetlistsInCity = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/api/v1/search/cityId`, {
      params: {
        cityId: route.params.id
      }
    });
    setlists.value = response.data.setlist;
  }
  catch (err) {
    console.error(err);
  };
};

const toggleShowSongs = (data:any) => {
  data.showSongs = !data.showSongs;
};

onMounted(async () => {
    await fetchSetlistsInCity();
});
</script>

<template>
  <Navbar />
  <main>
    <h1>Setlists in city</h1>
    <div>
      <template v-if="setlists.length > 0">
        <v-list-item v-for="data in setlists" :key="data.id">
          <v-table>
            <thead>
              <tr>
                <th @click="toggleShowSongs(data)">
                  {{ data.artist.name }} at {{ data.venue.name }} ({{ data.venue.city.name }},
                  {{ data.venue.city.country.name }}) {{ data.eventDate }}
                </th>
              </tr>
            </thead>
            <tbody v-if="data.showSongs">
              <template v-if="data.sets.set[0] && data.sets.set[0].song">
                <tr v-for="(item, index) in data.sets.set[0].song" :key="item.name">
                  <td>{{ index + 1 }}. {{ item.name }}</td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td>No songs available</td>
                </tr>
              </template>
            </tbody>
          </v-table>
        </v-list-item>
      </template>
      <p v-else>No songs</p>
    </div>
  </main>
  <Footer />
</template>