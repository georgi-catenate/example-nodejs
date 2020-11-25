import path from 'path';
import { ConnectionOptions } from 'typeorm';

export = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'node_project',
    synchronize: false,
    logging: true,
    entities: [
        path.join(__dirname, '/db/entities/*.{js,ts}'),
    ],
    migrations: [
        path.join(__dirname, '/db/migrations/*.{js,ts}'),
    ],
    cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
    },
} as ConnectionOptions;
