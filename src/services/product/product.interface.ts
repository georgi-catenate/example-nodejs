import { Product } from '../../db/entities/product';

export interface IProductService {
    create: (product: Product) => Promise<Product>;
    update: (productId: string, productToUpdate: Partial<Product>) => Promise<Product>;
    getAll: () => Promise<Product[]>;
}
