<template>
  <div>
    <v-app>
      <v-app-bar app color="blue-darken-3">
        <v-toolbar-title>Magnus Sulcus<span class="material-symbols-outlined">genres</span></v-toolbar-title>
        <v-btn to="/">Domus<span class="material-symbols-outlined">home</span></v-btn>
        <v-btn to="/venues">Visneto<span class="material-symbols-outlined">stadium</span></v-btn>
        <v-btn to="/cities">Urbes<span class="material-symbols-outlined">location_city</span></v-btn>
        <v-btn to="/maps">Mappa<span class="material-symbols-outlined">map</span></v-btn>
      </v-app-bar>
    </v-app>
  </div>
</template>

<style>
.v-application__wrap {
  min-height: fit-content !important;
  z-index: 1;
}
</style>