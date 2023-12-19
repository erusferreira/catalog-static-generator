import { Injectable } from "@nestjs/common";

import { Catalog } from '../../../domain/entities/catalog.entity';
import { CatalogRepository } from "./catalog.repository";

@Injectable()
export class CatalogService {

  constructor(
    private catalogRepository: CatalogRepository
  ) {}

  public async findAll(): Promise<Catalog[]> {
    return await this.catalogRepository.getCatalogs();
  }
}
