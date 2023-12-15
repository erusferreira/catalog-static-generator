import { Module } from '@nestjs/common';

import { EnvModule } from './env/env.module';
import { KafkaModule } from './kafka/kafka.module';
import { MessageConsumer } from './message.consumer';
import { StaticModule } from './static/static.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [
    EnvModule,
    KafkaModule,
    StaticModule,
    LogModule
  ],
  controllers: [],
  providers: [
    MessageConsumer
  ],
})
export class AppModule {}
