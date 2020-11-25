import { Router, Request, Response } from 'express';
import { Product } from '../../db/entities/product';
import { IEntityServices } from '../../interfaces/services/services.interface';

export const getProductRouter = (
    services: IEntityServices,
): Router => {
    const router = Router({ mergeParams: true });

    router.get('/', async (request: Request, response: Response) => {
        try {
            const products = await services.productService.getAll();
            response.json(products);
        } catch (error) {
            throw new Error(error);
        }
    });

    router.post('/', async (request: Request, response: Response) => {
        const productToCreate: Product = request.body;

        const createdProduct = await services.productService.create(productToCreate);

        response.json(createdProduct);
    });

    return router;
};
