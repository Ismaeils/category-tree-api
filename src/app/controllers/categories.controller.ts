import { NextFunction, Request, Response } from "express";
import Logger from "../config/logger.config";
import { CategoriesService } from "../services/categories.service";

export class CategoriesController{
    private _service: CategoriesService;
    
    public async getCategoriesFlat(request: Request, response: Response, next: NextFunction) {
        try{
            response.status(200).json({message: `success`, data: await this._service.getAllCategoriesFlat()});
        }catch(ex){
            next(ex);
        }
    }

    public async getCategoryFlat(request: Request, response: Response, next: NextFunction) {
        try{
            const category = await this._service.getCategoryFlat(parseInt(request.params.id));
            if(!category) return next({message: 'There is no category with that ID', status: 400});
            
            response.status(200).json({message: `success`, data: category});
        }catch(ex) {
            next(ex);
        }
    }

    public async getCategories(request: Request, response: Response, next: NextFunction) {
        try{
            response.status(200).json({message: `success`, data: await this._service.getAllCategories()});
        }catch(ex){
            next(ex);
        }
    }

    public async getCategory(request: Request, response: Response, next: NextFunction) {
        try{
            response.status(200).json({message: `success`, data: await this._service.getCategoryThread(parseInt(request.params.id))});
        }catch(ex){
            next(ex);
        }
    }


}