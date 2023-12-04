
import { Request, Response, NextFunction } from "express";
import axios from 'axios';
import "../configs/env.config.js";


const config = {
    headers: {
        'x-api-key': process.env.SETLISTFM_API_KEY
    }
};


export default {
    getArtistHandler: async function(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await axios.get(`https://api.setlist.fm/rest/1.0/search/artists?artistName=${req.query.artist}`, config);
            const artist = response.data;
            res.status(200).json(artist);
        }
        catch (err) {
            next(err);
        };
    },
    getCityHandler: async function(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await axios.get(`https://api.setlist.fm/rest/1.0/search/cities?name=${req.query.city}`, config);
            const city = response.data;
            res.status(200).json(city);
        }
        catch (err) {
            next(err);
        };
    },
    getVenueHandler: async function(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await axios.get(`https://api.setlist.fm/rest/1.0/search/venues?name=${req.query.venue}`, config);
            const venue = response.data;
            res.status(200).json(venue);
        }
        catch (err) {
            next(err);
        };
    },
    getSetlistsInCityNameHandler: async function(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await axios.get(`https://api.setlist.fm/rest/1.0/search/setlists/?cityName=${req.query.cityName}`, config);
            const setlists = response.data;
            res.status(200).json(setlists);
        }
        catch (err) {
            next(err);
        }
    },
    getSetlistsInCityHandler: async function(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await axios.get(`https://api.setlist.fm/rest/1.0/search/setlists/?cityId=${req.query.cityId}`, config);
            const setlists = response.data;
            res.status(200).json(setlists);
        }
        catch (err) {
            next(err);
        }
    }
};