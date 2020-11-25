/* eslint-disable @typescript-eslint/no-unused-vars */
import { Product } from '../../db/entities/product';
import { IServerConfiguration } from '../../interfaces/constants/server-configuration.interface';
import { ProductRepository } from '../../repositories/product.repository';
import { IProductService } from './product.interface';

export const createProduct = (
    repository: ProductRepository,
) => async (productToCreate: Product): Promise<Product> => {
    let createdProduct;
    try {
        createdProduct = await repository.save(productToCreate);
        console.log(`Product created with id - ${createdProduct.id}`);
        return createdProduct;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};

export const updateProduct = (
    repository: ProductRepository,
) => async (productId: string, productToUpdate: Partial<Product>): Promise<Product> => {
    // TODO: Implement
    const product = new Product();
    return new Promise((resolve) => resolve(product));
};

export const getAllProducts = (
    repository: ProductRepository,
) => async (): Promise<Product[]> => {
    const products = await repository.getAll();
    return products;
};

export const instantiateProductService = (
    configurations: IServerConfiguration,
    repository: ProductRepository,
): IProductService => ({
    create: createProduct(repository),
    update: updateProduct(repository),
    getAll: getAllProducts(repository),
});
