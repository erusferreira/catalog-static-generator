import * as Joi from "joi";

export const ENV_VALIDATION_SCHEMA = Joi.object({
  KAFKA_BROKER: Joi.required(),
  KAFKA_TOPIC: Joi.required(),
  KAFKA_CLIENT_ID: Joi.required(),
  KAFKA_CONSUMER_GROUP_ID: Joi.required(),
  LOGS_OUTPUT_FOLDER: Joi.required(),
  LOGS_FILE_NAME: Joi.required(),
  MONGO_URL: Joi.required(),
  S3_BUCKET_NAME: Joi.required(),
  S3_HASH_SECRET: Joi.required(),
  AWS_REGION: Joi.required(),
  AWS_ACCESS_KEY_ID: Joi.required(),
  AWS_SECRET_ACCESS_KEY: Joi.required(),
})