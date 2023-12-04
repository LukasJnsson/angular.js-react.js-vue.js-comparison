<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <Navbar />
    <main>
      <h1>Error Route</h1>
        <v-card class="mx-auto" max-width="600">
          <v-img height="600px" cover src="https://m.media-amazon.com/images/M/MV5BMzNiNmU2ZmUtNmM4My00OTRjLWIxZTgtYzk1ZmI3ZjU2NjkwXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"/>
          <v-card-title>Dave Mustaine</v-card-title>
          <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet commodo urna in iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac tristique ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vel ex cursus nibh vehicula iaculis. Suspendisse vel facilisis tortor. Vestibulum eu purus justo.</v-card-subtitle>
        </v-card>
    </main>
  <Footer />
</template>