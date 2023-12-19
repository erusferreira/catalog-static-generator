import { Module, Global } from '@nestjs/common';
import { S3Service } from './s3.service';

@Global()
@Module({
  providers: [
    S3Service,
    {
      provide: 'S3_CONFIG_OPTIONS',
      useValue: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
      },
    },
  ],
  exports: [
    S3Service
  ]
})
export class S3Module {}
