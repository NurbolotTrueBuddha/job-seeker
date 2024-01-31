import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post()
  async create(@Body() dto: {}, @Query() id: string) {
    return this.service.createPost(dto, id);
  }
}
