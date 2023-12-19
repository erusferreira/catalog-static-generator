import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Manufacturer, ManufacturerSchema } from '../../entities/Manufacturer.entity';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerRepository } from '../../repositories/manufacturer.repository';

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
