import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Category, CategorySchema } from '../../../domain/entities/Category.entity';
import { CategoryService } from './category.service';
import { CategoryRepository } from 'src/app/modules/category/category.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Category.name,
        schema: CategorySchema
      }
    ])],
  providers: [
    CategoryService,
    CategoryRepository
  ],
  exports: [
    CategoryService,
    CategoryRepository
  ],
})
export class CategoryModule {}
