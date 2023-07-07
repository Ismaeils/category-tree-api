import express, { Router } from 'express';
import { CategoriesController } from '../controllers/categories.controller';
import { CategoriesService } from '../services/categories.service';

export class CategoriesRouter {
  public router: Router;
  private controller: CategoriesController;
  private _service: CategoriesService;

  constructor(){
    this.router = express.Router();
    this.controller = new CategoriesController();
    this._service = new CategoriesService();
    this.registerRoutes();
  }
  
  protected registerRoutes(): void {
    this.router.get(`/`, this.controller.getCategories.bind(this));
    this.router.get(`/:id`, this.controller.getCategory.bind(this));
    this.router.get(`/flat/all`, this.controller.getCategoriesFlat.bind(this));
    this.router.get(`/flat/one/:id`, this.controller.getCategoryFlat.bind(this));
  }
}
