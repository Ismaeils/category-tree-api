import { Repository } from "typeorm";
import { Category } from "../data/entities/category.entity";
import DatabaseConfig from "../config/db.config";

export class CategoriesRepository {
    private readonly repository: Repository<Category>;
    constructor(){
        this.repository = DatabaseConfig.dbConnection.getRepository(Category);
    }
    public async findAll(): Promise<Category[]> {
        return this.repository.find();
    }

    public async findOne(id: number): Promise<Category | null> {
        return this.repository.findOne({where: {id }});
    }
}