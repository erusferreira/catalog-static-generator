import { Injectable, OnApplicationShutdown } from "@nestjs/common";
import { ConsumerRunConfig, ConsumerSubscribeTopics } from "@nestjs/microservices/external/kafka.interface";
import { Kafka, Consumer } from "kafkajs";

@Injectable()
export class ConsumerService implements OnApplicationShutdown {

  private readonly kafka = new Kafka({
    brokers: [
      process.env.KAFKA_BROKER
    ]
  })

  private readonly consumers: Consumer[] = [];

  public async consume(topic: ConsumerSubscribeTopics, config: ConsumerRunConfig): Promise<void> {
    const consumer = this.kafka.consumer({ groupId: process.env.KAFKA_CONSUMER_GROUP_ID });
    await consumer.connect();
    await consumer.subscribe(topic);
    await consumer.run(config);
    this.consumers.push(consumer);
  }

  public async onApplicationShutdown(): Promise<void> {
    for (const consumer of this.consumers) {
      await consumer.disconnect()
    }
  }
  
}
