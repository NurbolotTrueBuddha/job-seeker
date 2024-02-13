import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SendOtpDto } from './dto';
import { TrustedPhoneInterceptor } from './interceptors/trusted-phones.interceptor';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post()
  @UseInterceptors(TrustedPhoneInterceptor)
  async create(@Body() dto: SendOtpDto) {
    return this.service.createPost(dto);
  }

  @Get()
  async hello(){
    return 'hello Connect Developer'
  }
}
