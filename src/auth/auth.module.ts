import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataAcces } from './data-access';

@Module({
  imports: [TypeOrmModule.forFeature(DataAcces)],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
