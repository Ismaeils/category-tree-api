import { NextFunction, Request, Response } from "express";
import Logger from "../config/logger.config";

export const errorHandlingMiddleware = (error: any, request: Request, response: Response, next: NextFunction) => {
    Logger.error(JSON.stringify(error));
    error.state = `error`;
    const status = error.status || 500
    response.status(status).json({error});
}