import { IServerConfiguration } from '../interfaces/constants/server-configuration.interface';
import { IRepositories } from '../interfaces/repositories/repositories.interface';
import { IEntityServices } from '../interfaces/services/services.interface';
import { instantiateProductService } from './product/product.service';

export const initializeServices = (
    configurations: IServerConfiguration,
    repositories: IRepositories,
): IEntityServices => ({
    productService: instantiateProductService(configurations, repositories.products),
});
