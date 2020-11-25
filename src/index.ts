import 'reflect-metadata';
import { Application } from 'express';
import { getConfiguration } from './configurations';
import { IServerConfiguration } from './interfaces/constants/server-configuration.interface';

import { startServer } from './server';

const configuration: IServerConfiguration = getConfiguration(process.env);

startServer(configuration)
    .then((application: Application) => {
        const { SERVER_PORT } = configuration;
        application.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));

        console.log('Server successfully started');
    })
    .catch((error: Error) => {
        console.error('Server failed on startup', error);
    });
