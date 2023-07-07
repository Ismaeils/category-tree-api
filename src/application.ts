import express from 'express';
import bodyParser from 'body-parser';
import routes from './app/routes/application.router';
import DatabaseConfig from './app/config/db.config';
import morganMiddleware from './app/middlewares/morgan.middleware';
import { errorHandlingMiddleware } from './app/middlewares/error-handling.middleware';
import Logger from './app/config/logger.config';

export default class Application {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    public async config(): Promise<void> {
        require('dotenv').config();
        this.app.set(`port`, process.env.APP_PORT);
        this.app.use(bodyParser.json());
        this.app.use(morganMiddleware);
        await DatabaseConfig.initDBConnection();
        routes(this.app);
        this.app.use(errorHandlingMiddleware);
    }

    public start(): void {
        this.app.listen(this.app.get(`port`), ()=> {
            Logger.info(`App has started on ${this.app.get('port')}`);
        });
    }
}