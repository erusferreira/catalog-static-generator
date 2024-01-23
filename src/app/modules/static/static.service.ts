import { Injectable } from "@nestjs/common";

import { S3Service } from '@infrastructure/s3/s3.service';
import { CatalogRepository } from "../catalog/catalog.repository";

interface changeNotificationDTO {
  data: any;
  topic: string;
  partition: string;
}

@Injectable()
export class StaticService {

  constructor(
    private s3Service: S3Service,
    private catalogRepository: CatalogRepository
  ) {}

  public async generate(changeNotificationDTO: changeNotificationDTO): Promise<void> {
    const { date, value, message } = JSON.parse(changeNotificationDTO.data);
    const catalogs = await this.catalogRepository.getCatalogsByMerchant(value.merchantId);
  
    if (catalogs.filter(catalog => catalog._id == value.catalogId).length < 0) {
      return
    };

    const staticData = await this.catalogRepository.getCatalogCategoriesWithItems(value.catalogId);
    await this.s3Service.save(staticData);
  }
  
}
