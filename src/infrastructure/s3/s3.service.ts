import { Injectable, Inject } from "@nestjs/common";
import { S3 } from 'aws-sdk';
import { createHmac } from 'node:crypto';

import { S3ConfigOptions } from './s3-config-options.interface';

@Injectable()
export class S3Service {

  private readonly s3: S3;

  constructor(
    @Inject('S3_CONFIG_OPTIONS') private readonly s3Config: S3ConfigOptions
  ) {
    this.s3 = new S3({
      accessKeyId: this.s3Config.accessKeyId,
      secretAccessKey: this.s3Config.secretAccessKey,
      region: this.s3Config.region,
    });
  }

  public async save(data?: any): Promise<void> {
    const stringifiedData = JSON.stringify(data);
    const hash = await this.generateHash(stringifiedData)

    const params: AWS.S3.PutObjectRequest = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: await `static_${hash}.json`,
      Body: stringifiedData,
      ContentType: 'application/json',
    };
    await this.s3.putObject(params).promise();
  }

  private async generateHash(data?: any): Promise<string> {
    return createHmac('sha256', process.env.S3_HASH_SECRET)
      .update(data)
      .digest('hex');
  }
  
}
