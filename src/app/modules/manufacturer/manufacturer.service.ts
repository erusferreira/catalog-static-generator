import { Injectable } from "@nestjs/common";

import { Manufacturer } from 'domain/entities/manufacturer.entity';
import { ManufacturerRepository } from "./manufacturer.repository";

@Injectable()
export class ManufacturerService {

  constructor(
    private manufacturerRepository: ManufacturerRepository
  ) {}

  public async findAll(): Promise<Manufacturer[]> {
    return await this.manufacturerRepository.getManufacturers();
  }
}
