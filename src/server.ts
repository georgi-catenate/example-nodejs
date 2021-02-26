import express, { Application } from 'express';
import cors from 'cors';

import { IServerConfiguration } from './interfaces/constants/server-configuration.interface';
import { getRootRouter } from './endpoints';
import { getDbConnection } from './db/connection';
import { initiateDbRepositories } from './repositories';
import { initializeServices } from './services';

const app = express();

export const startServer = async (configurations: IServerConfiguration) => {
    await getDbConnection(configurations);

    const repositories = initiateDbRepositories();
    const services = initializeServices(configurations, repositories);

    const application: Application = app
        .use(express.urlencoded({ extended: true }))
        .use(express.json({ limit: '100mb' }))
        .use(cors())
        .use('/', getRootRouter(services));

    return application;
};
