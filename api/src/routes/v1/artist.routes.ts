
import express from "express";
const router = express.Router();
import artistController from "../../controllers/artist.controller.js";


router.get('/:id', artistController.getArtistByIdHandler);

router.get('/:id/setlists', artistController.getArtistSetlistsHandler);


export default router;