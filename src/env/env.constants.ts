import * as Joi from "joi";

export const ENV_VALIDATION_SCHEMA = Joi.object({
  KAFKA_BROKER: Joi.required(),
  KAFKA_TOPIC: Joi.required(),
  KAFKA_CLIENT_ID: Joi.required(),
  KAFKA_CONSUMER_GROUP_ID: Joi.required(),
  LOGS_OUTPUT_FOLDER: Joi.required(),
  LOGS_FILE_NAME: Joi.required(),
})