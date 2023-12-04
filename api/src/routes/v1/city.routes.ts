
import express from "express";
const router = express.Router();
import cityController from "../../controllers/city.controller.js";


router.get('/:id', cityController.getCityGeoIdHandler);


export default router;