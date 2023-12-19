import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Manufacturer, ManufacturerSchema } from '../../../domain/entities/Manufacturer.entity';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerRepository } from './manufacturer.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Manufacturer.name,
        schema: ManufacturerSchema
      }
    ])],
  providers: [
    ManufacturerService,
    ManufacturerRepository
  ],
  exports: [
    ManufacturerService,
    ManufacturerRepository
  ],
})
export class ManufacturerModule {}
