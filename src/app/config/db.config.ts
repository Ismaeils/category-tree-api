import { DataSource, DataSourceOptions } from "typeorm";
import {dataSource} from './datasource.config';
import Logger from "./logger.config";
export default class DatabaseConfig {
    static dbConnection: DataSource;

    static async initDBConnection(): Promise<void>{
        DatabaseConfig.dbConnection = dataSource;
        try{
            await DatabaseConfig.dbConnection.initialize();
            Logger.info(`Database connection initialized`);
            await DatabaseConfig.dbConnection.runMigrations({
                transaction: 'all'
            });
            Logger.info(`Migrations ran successfully`);
        }catch(ex) {
            Logger.error(`Error initalizing database connection ${JSON.stringify(ex)}`);
        }
    }
}