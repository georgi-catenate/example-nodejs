const { Router } = require('express');
const getProductRouter = require('./product/product.router');

const getRootRouter = (services) => {
    const router = Router({ mergeParams: true });

    router.use('/products', getProductRouter(services));

    return router;
};

module.exports = getRootRouter;
