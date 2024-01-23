import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from '@domain/entities/user.entity';

export class UserRepository {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    public async getUsers(): Promise<User[]> {
      try {
        const Users = await this.userModel.find();
        console.log('##### Users #####', Users);
        return Users;
      } catch (error) {
        throw new Error(error);
      }
    }
}