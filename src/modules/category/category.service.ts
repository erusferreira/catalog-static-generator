import { Injectable } from "@nestjs/common";

import { Category } from '../../entities/Category.entity';
import { CategoryRepository } from "../../repositories/category.repository";

@Injectable()
export class CategoryService {

  constructor(
    private categoryRepository: CategoryRepository
  ) {}

  public async findAll(): Promise<Category[]> {
    return await this.categoryRepository.getCategories();
  }
}
