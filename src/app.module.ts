import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigurationModule } from './config/configuration.module';
import { ConfigurationService } from './config/configuration.service';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigurationService],
      useFactory: async ({
        database,
      }: ConfigurationService): Promise<TypeOrmModuleOptions> => database,
    }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
