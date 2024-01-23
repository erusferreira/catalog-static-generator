import { Module } from '@nestjs/common';

import { StaticService } from './static.service';
import { S3Module } from '@infrastructure/s3/s3.module';
import { CatalogModule } from '../catalog/catalog.module';
import { CategoryModule } from '../category/category.module';
import { ItemModule } from '../item/item.module';
@Module({
  imports: [
    S3Module,
    CatalogModule,
    CategoryModule,
    ItemModule
  ],
  providers: [
    StaticService
  ],
  exports: [
    StaticService
  ]
})
export class StaticModule {}
