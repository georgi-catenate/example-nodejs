const { Router } = require('express');

const getProductRouter = (services) => {
    const router = Router({ mergeParams: true });

    router.get('/', async (request, response) => {
        try {
            const products = await services.productService.findAll();
            response.json(products);
        } catch (error) {
            throw new Error(error);
        }
    });

    router.post('/', async (request, response) => {
        const productToCreate = request.body;

        const createdProduct = await services.productService.create(productToCreate);

        response.json(createdProduct);
    });

    return router;
};

module.exports = getProductRouter;
