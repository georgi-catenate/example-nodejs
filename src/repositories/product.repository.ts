import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../db/entities/product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    public getAll(): Promise<Product[]> {
        return this.find();
    }
}
