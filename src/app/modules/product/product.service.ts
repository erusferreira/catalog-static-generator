import { Injectable } from "@nestjs/common";

import { Product } from 'domain/entities/product.entity';
import { ProductRepository } from "./product.repository";

@Injectable()
export class ProductService {

  constructor(
    private productRepository: ProductRepository
  ) {}

  public async findAll(): Promise<Product[]> {
    return await this.productRepository.getProducts();
  }
}
