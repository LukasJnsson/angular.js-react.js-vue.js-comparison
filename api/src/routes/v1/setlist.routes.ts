
import express from "express";
const router = express.Router();
import setlistController from "../../controllers/setlist.controller.js";


router.get('/:id', setlistController.getSetlistHandler);


export default router;