"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfiguration = void 0;
const getConfiguration = (environment) => {
    if (!environment.SERVER_PORT) {
        throw new Error('environment variable SERVER_PORT is required');
    }
    if (!environment.DB_USERNAME) {
        throw new Error('environment variable DB_USERNAME is required');
    }
    if (!environment.DB_PASSWORD) {
        throw new Error('environment variable DB_PASSWORD is required');
    }
    if (!environment.DB_NAME) {
        throw new Error('environment variable DB_NAME is required');
    }
    if (!environment.DB_PORT) {
        throw new Error('environment variable DB_PORT is required');
    }
    if (!environment.DB_HOST) {
        throw new Error('environment variable DB_HOST is required');
    }
    return {
        SERVER_PORT: parseInt(environment.SERVER_PORT, 10),
        DB_USERNAME: environment.DB_USERNAME,
        DB_PASSWORD: environment.DB_PASSWORD,
        DB_NAME: environment.DB_NAME,
        DB_PORT: environment.DB_PORT,
        DB_HOST: environment.DB_HOST,
    };
};
exports.getConfiguration = getConfiguration;
//# sourceMappingURL=configurations.js.map