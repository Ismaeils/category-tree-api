import express, { NextFunction, Request, Response } from 'express';
import {CategoriesRouter} from './categories.router';

const routes = (server: express.Application): void => {
    // Ping boy
    server.get('/', (_req,res,_next) => {
        res.status(200).json({message: "Ping Back!"});
    });
    // Categories routes
    server.use('/categories', (new CategoriesRouter()).router);
    // Wild card to handle 404 paths
    server.all('*', (_req,res,_next)=> {
        res.status(404).json({message: `You are definitely lost, mate`});
    });
}

export default routes;