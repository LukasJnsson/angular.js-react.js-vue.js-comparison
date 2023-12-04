
import { Request, Response, NextFunction } from "express";


export default function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    const error = {
        status: err.statusCode ?? 500,
        name: err.name ?? 'Error',
        message: err.message
    };
    res.status(error.status).send(error);
};