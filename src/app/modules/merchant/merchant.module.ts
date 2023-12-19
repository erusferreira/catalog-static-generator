import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Merchant, MerchantSchema } from '../../../domain/entities/merchant.entity';
import { MerchantService } from './merchant.service';
import { MerchantRepository } from './merchant.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Merchant.name,
        schema: MerchantSchema
      }
    ])],
  providers: [
    MerchantService,
    MerchantRepository
  ],
  exports: [
    MerchantService,
    MerchantRepository
  ],
})
export class MerchantModule {}
