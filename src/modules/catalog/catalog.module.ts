import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Catalog, CatalogSchema } from '../../entities/catalog.entity';
import { CatalogService } from './catalog.service';
import { CatalogRepository } from 'src/repositories/catalog.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Catalog.name,
        schema: CatalogSchema
      }
    ])],
  providers: [
    CatalogService,
    CatalogRepository
  ],
  exports: [
    CatalogService,
    CatalogRepository
  ],
})
export class CatalogModule {}
