"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
const isCompiled = path_1.default.extname(__filename).includes('js');
module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'node_project',
    synchronize: false,
    logging: true,
    entities: [
        path_1.default.join(__dirname, '/db/entities/*.{js,ts}'),
    ],
    migrations: [
        `src/db/migrations/**/*.${isCompiled ? 'js' : 'ts'}`,
    ],
    cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
    },
};
//# sourceMappingURL=ormconfig.js.map