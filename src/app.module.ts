import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EnvModule } from './env/env.module';
import { KafkaModule } from './kafka/kafka.module';
import { MessageConsumer } from './message.consumer';
import { StaticModule } from './static/static.module';
import { LogModule } from './log/log.module';
import { S3Module } from './s3/s3.module';
import { DatabaseModule } from './database/database.module';

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
