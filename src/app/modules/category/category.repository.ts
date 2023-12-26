import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Category } from '../../../domain/entities/category.entity';

export class CategoryRepository {
    constructor(@InjectModel(Category.name) private readonly categoryModel: Model<Category>) {}

    public async getCategories(): Promise<Category[]> {
      try {
        return await this.categoryModel.find();
      } catch (error) {
        throw new Error(error);
      }
    }
}
