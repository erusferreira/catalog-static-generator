import { Injectable } from "@nestjs/common";

import { Manufacturer } from '../../entities/manufacturer.entity';
import { ManufacturerRepository } from "../../repositories/manufacturer.repository";

@Injectable()
export class ManufacturerService {

  constructor(
    private manufacturerRepository: ManufacturerRepository
  ) {}

  public async findAll(): Promise<Manufacturer[]> {
    return await this.manufacturerRepository.getManufacturers();
  }
}
