
import express from "express";
const router = express.Router();
import searchController from "../../controllers/search.controller.js";


router.get('/artists', searchController.getArtistHandler);

router.get('/cities', searchController.getCityHandler);

router.get('/venues', searchController.getVenueHandler);

router.get('/cityName/:cityName', searchController.getSetlistsInCityNameHandler);

router.get('/:cityId', searchController.getSetlistsInCityHandler);


export default router;