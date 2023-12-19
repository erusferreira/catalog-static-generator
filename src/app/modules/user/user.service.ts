import { Injectable } from "@nestjs/common";

import { User } from '../../../domain/entities/user.entity';
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {

  constructor(
    private userRepository: UserRepository
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.userRepository.getUsers();
  }
}
