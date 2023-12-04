
import { Request, Response, NextFunction } from "express";
import axios from 'axios';
import "../configs/env.config.js";


const config = {
    headers: {
        'x-api-key': process.env.SETLISTFM_API_KEY
    }
};


export default {
    getSetlistHandler: async function(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await axios.get(`https://api.setlist.fm/rest/1.0/setlist/2ba2d842`, config);
            const setlistById = response.data;
            res.status(200).json(setlistById);
        }
        catch (err) {
            next(err);
        };
    }
};