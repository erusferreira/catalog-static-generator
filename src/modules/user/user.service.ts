import { Injectable } from "@nestjs/common";

import { User } from '../../entities/user.entity';
import { UserRepository } from "../../repositories/user.repository";

@Injectable()
export class UserService {

  constructor(
    private userRepository: UserRepository
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.userRepository.getUsers();
  }
}
