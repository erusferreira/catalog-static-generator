import { Injectable } from "@nestjs/common";

import { Catalog } from '../../entities/catalog.entity';
import { CatalogRepository } from "src/repositories/catalog.repository";

@Injectable()
export class CatalogService {

  constructor(
    private catalogRepository: CatalogRepository
  ) {}

  public async findAll(): Promise<Catalog[]> {
    return await this.catalogRepository.getCatalogs();
  }
}
