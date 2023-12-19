import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Product, ProductSchema } from '../../entities/product.entity';
import { ProductService } from './product.service';
import { ProductRepository } from '../../repositories/product.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema
      }
    ])],
  providers: [
    ProductService,
    ProductRepository
  ],
  exports: [
    ProductService,
    ProductRepository
  ],
})
export class ProductModule {}
