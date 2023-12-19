import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type ManufacturerDocument = HydratedDocument<Manufacturer>;

@Schema()
export class Manufacturer {
  @Prop()
  name: string;

  @Prop()
  cnpj: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Merchant' })
  is_active: boolean;

  @Prop()
  create_at: Date;

  @Prop()
  update_at: Date;
}

export const ManufacturerSchema = SchemaFactory.createForClass(Manufacturer);
