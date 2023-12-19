import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Category } from '../entities/category.entity';

export class CategoryRepository {
    constructor(@InjectModel(Category.name) private readonly categoryModel: Model<Category>) {}

    public async getCategories(): Promise<Category[]> {
      try {
        const categories = await this.categoryModel.find();
        console.log('##### categories #####', categories);
        return categories;
      } catch (error) {
        throw new Error(error);
      }
    }
}