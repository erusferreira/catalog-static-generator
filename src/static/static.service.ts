import { Injectable } from "@nestjs/common";

import { S3Service } from '../s3/s3.service';

interface MessageDTO {
  value: any;
  topic: string;
  partition: string;
}

@Injectable()
export class StaticService {

  constructor(private s3Service: S3Service) {}

  public async generate(messageDto: MessageDTO): Promise<void> {
    await this.s3Service.save(messageDto);
  }
  
}
