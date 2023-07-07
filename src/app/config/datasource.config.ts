require('dotenv').config();
import { DataSource, DataSourceOptions } from "typeorm";
import { Category } from "../data/entities/category.entity";

export const dataSource: DataSource =  new DataSource({
    type: 'postgres',
    url: process.env.PSQL_CONN_STRING,
    // host: process.env.DB_HOST,
    // port: parseInt(process.env.DB_PORT as string),
    // username: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // database: process.env.DB_NAME,
    entities: [Category],
    migrations: ['src/app/data/migrations/*{.ts,.js}'],
    synchronize: true,
});