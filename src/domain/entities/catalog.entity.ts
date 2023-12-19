import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

import { Merchant } from './merchant.entity';

export type CatalogDocument = HydratedDocument<Catalog>;

@Schema()
export class Catalog {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Merchant' })
  merchant: Merchant;

  @Prop()
  create_at: Date;

  @Prop()
  update_at: Date;

  @Prop()
  is_active: boolean;
}

export const CatalogSchema = SchemaFactory.createForClass(Catalog);
