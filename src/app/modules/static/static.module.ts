import { Module } from '@nestjs/common';

import { CatalogModule } from '../catalog/catalog.module';
import { StaticService } from './static.service';

@Module({
  imports: [
    CatalogModule
  ],
  providers: [
    StaticService
  ],
  exports: [
    StaticService
  ]
})
export class StaticModule {}
