const express = require('express');
const cors = require('cors');

const models = require('./db/models');
const initiateDbRepositories = require('./repositories');
const initializeServices = require('./services');
const getRootRouter = require('./endpoints');

const app = express();

const startServer = async (configurations) => {
    const repositories = initiateDbRepositories(models);
    const services = initializeServices(configurations, repositories);

    const application = app
        .use(express.urlencoded({ extended: true }))
        .use(express.json({ limit: '100mb' }))
        .use(cors())
        .use('/', getRootRouter(services));

    return application;
};

module.exports = startServer;
