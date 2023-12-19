import { Injectable, OnModuleInit } from "@nestjs/common";

import { ConsumerService } from "./infrastructure/kafka/consumer.service";
import { LogService } from "./infrastructure/log/log.service";
import { StaticService } from "./app/modules/static/static.service";

@Injectable()
export class MessageConsumer implements OnModuleInit {

  constructor(
    private readonly consumerService: ConsumerService,
    private readonly logService: LogService,
    private readonly staticService: StaticService
  ) {}

  async onModuleInit() {
    await this.consumerService.consume(
      { topics: [process.env.KAFKA_TOPIC] },
      { 
        eachMessage: async ({ topic, partition, message}) => {          
          const messageDto = { 
            value: message.value.toString(),
            topic: topic.toString(),
            partition: partition.toString()
          }

          this.logService.save(message);
          this.staticService.generate(messageDto)
        }})
  }
  
}
