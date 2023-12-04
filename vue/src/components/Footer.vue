<template>
    <v-app>
        <v-footer class="bg-blue-darken-3 text-center d-flex flex-column" fixed>
            <div class="pt-0">Lukas Jönsson - Marcus Lennartsson</div>
            <div class="pt-0">© All rights reserved - Ius Reservari</div>
            <div>{{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<style>
.v-application__wrap {
    bottom: 0 !important; 
    position: fixed !important; 
    padding-top: 0 !important; 
    width: 100% !important;
}
</style>