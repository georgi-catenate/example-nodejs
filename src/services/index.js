const instantiateProductService = require('./product/product.service');

const initializeServices = (configurations, repositories) => ({
    productService: instantiateProductService(configurations, repositories.products),
});

module.exports = initializeServices;
