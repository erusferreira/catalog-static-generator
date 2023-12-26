import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MessageConsumer } from './message.consumer';
import { EnvModule } from './config/env/env.module';
import { KafkaModule } from './infrastructure/kafka/kafka.module';
import { LogModule } from './infrastructure/log/log.module';
import { StaticModule } from './app/modules/static/static.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [
    EnvModule,
    KafkaModule,
    LogModule,
    StaticModule,
    DatabaseModule,
    MongooseModule.forRoot(process.env.MONGO_URL)
  ],
  controllers: [],
  providers: [
    MessageConsumer
  ],
})
export class AppModule {}
