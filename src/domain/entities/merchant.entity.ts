import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

import { User } from './user.entity';

export type MerchantDocument = HydratedDocument<Merchant>;

@Schema()
export class Merchant {
  @Prop()
  name: string;

  @Prop()
  cnpj: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  create_at: Date;

  @Prop()
  update_at: Date;

  @Prop()
  is_active: boolean;
}

export const MerchantSchema = SchemaFactory.createForClass(Merchant);
