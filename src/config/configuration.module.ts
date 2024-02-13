import { Module } from '@nestjs/common';
import * as Joi from '@hapi/joi';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { ConfigurationService } from './configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        SWAGGER_URL: Joi.string().default('http://localhost:3000'),
        SWAGGER_PREFIX: Joi.string().required(),
        HTTP_PORT: Joi.number().default(3000),
        DATABASE: Joi.string().required(),
        DATABASE_DRIVER: Joi.string().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        // SMS_GATEWAY: Joi.string().required(),
        // SMS_GATEWAY_SENDER: Joi.string().required(),
        // SMS_GATEWAY_USERNAME: Joi.string().required(),
        // SMS_GATEWAY_PASSWORD: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService, ConfigurationService],
  exports: [ConfigService, ConfigurationService],
})
export class ConfigurationModule {}
