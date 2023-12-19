import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

import { Manufacturer } from './manufacturer.entity';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  ean_code: string;

  @Prop()
  unit_measurement: string;

  @Prop()
  is_active: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Manufacturer' })
  manufaturer: Manufacturer;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
