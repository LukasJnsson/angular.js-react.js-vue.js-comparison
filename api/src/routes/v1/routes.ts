
import express from "express";
const router = express.Router();
import artistRoutes from "./artist.routes.js";
import setlistRoutes from "./setlist.routes.js";
import searchRoutes from "./search.routes.js";
import cityRoutes from "./city.routes.js";


router.use('/artists', artistRoutes);

router.use('/setlists', setlistRoutes);

router.use('/search', searchRoutes);

router.use('/cities', cityRoutes);


export default router;