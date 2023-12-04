
import { Request, Response, NextFunction } from "express";
import axios from 'axios';
import "../configs/env.config.js";


const config = {
    headers: {
        'x-api-key': process.env.SETLISTFM_API_KEY
    }
};


export default {
    getCityGeoIdHandler: async function(req: Request, res: Response, next: NextFunction) {
        try {
            const apiUrl = `https://api.setlist.fm/rest/1.0/city/${req.query.id}`;
            const response = await axios.get(apiUrl, config);
            const cityInformation = response.data;
            res.status(200).json(cityInformation);
        } 
        catch (err) {
            next(err);
        }
    },
};