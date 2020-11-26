const getBaseRepository = require('./base.repository');

const initiateDbRepositories = (models) => ({
    products: getBaseRepository(models.product),
});

module.exports = initiateDbRepositories;
