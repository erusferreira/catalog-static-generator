import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

import { Catalog } from './catalog.entity';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  create_at: Date;

  @Prop()
  update_at: Date;

  @Prop()
  is_active: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Catalog' })
  catalog: Catalog;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
