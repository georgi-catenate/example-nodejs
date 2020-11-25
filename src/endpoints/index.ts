import { Router } from 'express';
import { IEntityServices } from '../interfaces/services/services.interface';
import { getProductRouter } from './product/product.router';

export const getRootRouter = (
    services: IEntityServices,
): Router => {
    const router = Router({ mergeParams: true });

    router.use('/products', getProductRouter(services));

    return router;
};
