import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from '../entities/product.entity';

export class ProductRepository {
    constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

    public async getProducts(): Promise<Product[]> {
      try {
        const Products = await this.productModel.find();
        console.log('##### Products #####', Products);
        return Products;
      } catch (error) {
        throw new Error(error);
      }
    }
}