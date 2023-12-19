import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EnvModule } from './config/env/env.module';
import { KafkaModule } from './infrastructure/kafka/kafka.module';
import { MessageConsumer } from './message.consumer';
import { StaticModule } from './app/modules/static/static.module';
import { LogModule } from './infrastructure/log/log.module';
import { S3Module } from './infrastructure/s3/s3.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [
    EnvModule,
    KafkaModule,
    StaticModule,
    LogModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
    S3Module,
    DatabaseModule
  ],
  controllers: [],
  providers: [
    MessageConsumer
  ],
})
export class AppModule {}
