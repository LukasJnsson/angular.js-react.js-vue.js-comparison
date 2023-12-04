
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Artist from '../views/Artist.vue';
import Venues from '../views/Venues.vue';
import Cities from '../views/Cities.vue';
import SetlistInCity from '../views/SetlistInCity.vue';
import Maps from '../views/Maps.vue';
import Error from '../views/Error.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/artists/:id',
      name: 'artistsId',
      component: Artist
    },
    {
      path: '/venues',
      name: 'venue',
      component: Venues,
      meta: {
        title: 'Venues'
      }
    },
    {
      path: '/venues/:id',
      name: 'venuesId',
      component: Venues
    },
    {
      path: '/cities',
      name: 'cities',
      component: Cities,
      meta: {
        title: 'Cities'
      }
    },
    {
      path: '/cities/:id',
      name: 'citiesId',
      component: SetlistInCity
    },
    {
      path: '/maps',
      name: 'mapsId',
      component: Maps,
      meta: {
        title: 'Map'
      }
    },
    {
      path: "/:catchAll(.*)",
      name: "Error",
      component: Error,
    }
    
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'SetlistFM';
  next();
});


export default router;