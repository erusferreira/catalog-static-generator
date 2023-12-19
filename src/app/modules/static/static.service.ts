import { Injectable } from "@nestjs/common";

import { S3Service } from '../../../infrastructure/s3/s3.service';
import { CatalogService } from '../catalog/catalog.service';


interface MessageDTO {
  value: any;
  topic: string;
  partition: string;
}

@Injectable()
export class StaticService {

  constructor(
    private s3Service: S3Service,
    private catalogService: CatalogService
  ) {}

  public async generate(messageDto: MessageDTO): Promise<void> {
    
    const catalogs = await this.catalogService.findAll();
    await this.s3Service.save(catalogs);
  }
  
}
