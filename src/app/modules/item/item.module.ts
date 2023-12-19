import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Item, ItemSchema } from '../../../domain/entities/item.entity';
import { ItemService } from './item.service';
import { ItemRepository } from 'src/app/modules/item/item.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Item.name,
        schema: ItemSchema
      }
    ])],
  providers: [
    ItemService,
    ItemRepository
  ],
  exports: [
    ItemService,
    ItemRepository
  ],
})
export class ItemModule {}
