import express, { Application } from 'express';
import cors from 'cors';

import { IServerConfiguration } from './interfaces/constants/server-configuration.interface';
import { getRootRouter } from './endpoints';
import ORMConfig from './ormconfig';
import { getDbConnection } from './db/connection';
import { initiateDbRepositories } from './repositories';
import { initializeServices } from './services';

const app = express();

// eslint-disable-next-line no-unused-vars
export const startServer = async (configurations: IServerConfiguration) => {
    await getDbConnection(ORMConfig);
    const repositories = initiateDbRepositories();
    const services = initializeServices(configurations, repositories);

    const application: Application = app
        .use(express.urlencoded({ extended: true }))
        .use(express.json({ limit: '100mb' }))
        .use(cors())
        .use('/', getRootRouter(services));

    return application;
};
