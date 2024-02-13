import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SwaggerCustomOptions } from '@nestjs/swagger';

export type AppOptions = {
  http: { port: number };
};

// export type SmsGateway = {
//   baseUrl: string;
//   senderName: string;
//   login: string;
//   password: string;
// };

export type SwaggerOptions = {
  prefix: string;
  url: string;
  options: Pick<SwaggerCustomOptions, 'swaggerOptions'>;
};

@Injectable()
export class ConfigurationService {
  constructor(private config: ConfigService) {}

  get app(): AppOptions {
    return this.config.get<AppOptions>('config.app');
  }

  get swagger(): SwaggerOptions {
    return this.config.get<SwaggerOptions>('config.swagger');
  }

  get port(): number {
    return this.config.get<number>('config.port');
  }

  get database(): TypeOrmModuleOptions {
    return this.config.get<TypeOrmModuleOptions>('config.database.pg');
  }

  // get smsGateway(): SmsGateway {
  //   return this.config.get<SmsGateway>('config.smsGateway');
  // }
}
