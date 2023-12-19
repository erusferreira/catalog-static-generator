import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

import { Category } from './category.entity';
import { Product } from './product.entity';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
 
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  image: string;

  @Prop()
  create_at: Date;

  @Prop()
  update_at: Date;

  @Prop()
  is_active: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  product: Product;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
