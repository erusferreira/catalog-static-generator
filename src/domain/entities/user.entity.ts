import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { RoleType } from 'app/enums';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  cpf: string;

  @Prop()
  is_active: boolean;

  @Prop()
  roles: RoleType;
}

export const UserSchema = SchemaFactory.createForClass(User);
