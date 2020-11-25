import { getCustomRepository } from 'typeorm';
import { IRepositories } from '../interfaces/repositories/repositories.interface';
import { ProductRepository } from './product.repository';

export const initiateDbRepositories = (): IRepositories => ({
    products: getCustomRepository(ProductRepository),
});
