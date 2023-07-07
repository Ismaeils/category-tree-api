import * as _ from 'lodash';
import { Category } from '../data/entities/category.entity';
import { CategoriesRepository } from '../repositories/categories.repository';

export class CategoriesService {
    private readonly _repository: CategoriesRepository;
  
    constructor() {
      this._repository = new CategoriesRepository();
    }

    public async getAllCategoriesFlat(): Promise<Category[]> {
      return await this._repository.findAll();
    }

    public async getCategoryFlat(id: number): Promise<Category | null> {
      return await this._repository.findOne(id);
    }

    public async getAllCategories(): Promise<any> {
      const categories = await this._repository.findAll();
      return this.constructCategoryTree(categories);
    }

    public async getCategoryThread(id: number): Promise<any> {
      const categories = await this._repository.findAll();
      return this.constructCategoryTree(categories, id);
    }

    public constructCategoryTree (categories: Category[], parent: any = null): any{
      return categories.filter((item: Category) => item.parentId === parent)
        .map((child: Category) => ({ ...child, subcategories: this.constructCategoryTree(categories, child.id) })
      );
    }
    
  }

