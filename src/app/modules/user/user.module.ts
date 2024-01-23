import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { User, UserSchema } from '@domain/entities/User.entity';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
      }
    ])],
  providers: [
    UserService,
    UserRepository
  ],
  exports: [
    UserService,
    UserRepository
  ],
})
export class UserModule {}
