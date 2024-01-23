import { Injectable } from "@nestjs/common";

import { Category } from 'domain/entities/category.entity';
import { CategoryRepository } from "./category.repository";

@Injectable()
export class CategoryService {

  constructor(
    private categoryRepository: CategoryRepository
  ) {}

  public async findAll(): Promise<Category[]> {
    return await this.categoryRepository.getCategories();
  }
}
