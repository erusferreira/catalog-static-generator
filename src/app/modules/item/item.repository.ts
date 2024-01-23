import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Item } from '@domain/entities/item.entity';

export class ItemRepository {
    constructor(@InjectModel(Item.name) private readonly itemModel: Model<Item>) {}

    public async getItems(): Promise<Item[]> {
      try {
        const Items = await this.itemModel.find();
        console.log('##### Items #####', Items);
        return Items;
      } catch (error) {
        throw new Error(error);
      }
    }
}