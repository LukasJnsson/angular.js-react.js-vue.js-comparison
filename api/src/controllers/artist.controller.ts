
import { Request, Response, NextFunction } from "express";
import axios from 'axios';
import "../configs/env.config.js";


const config = {
    headers: {
        'x-api-key': process.env.SETLISTFM_API_KEY
    }
};


export default {
    getArtistByIdHandler: async function(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await axios.get(`https://api.setlist.fm/rest/1.0/artist/${req.query.artistId}`, config);
            const artistById = response.data;
            res.status(200).json(artistById);
        }
        catch (err) {
            next(err);
        };
    },
    getArtistSetlistsHandler: async function(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await axios.get(`https://api.setlist.fm/rest/1.0/artist/${req.query.artistId}/setlists`, config);
            const setlistsByArtistId = response.data;
            res.status(200).json(setlistsByArtistId);
        }
        catch (err) {
            next(err);
        };
    },
};