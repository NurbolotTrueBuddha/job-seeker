import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    HttpStatus,
    Logger,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Request, Response } from 'express';
  import { Observable } from 'rxjs';
  import { Repository } from 'typeorm';
import { SendOtpDto } from '../dto';
import { OTPRequest, WHITELIST } from './whitelist';
import { OtpStatusEnum } from '../enum/otp-status.enum';
import { OtpOrm } from '../data-access/otp.orm';
  
  @Injectable()
  export class TrustedPhoneInterceptor implements NestInterceptor {
    constructor(
      @InjectRepository(OtpOrm)
      private readonly repository: Repository<OtpOrm>,
    ) {}
  
    async intercept(
      context: ExecutionContext,
      next: CallHandler,
    ): Promise<Observable<any>> {
      const ctx = context.switchToHttp();
  
      const { phone_number }: SendOtpDto = ctx.getRequest<Request>().body
  
      const trusted = WHITELIST.find(
        ({ phone: trusted }: OTPRequest) => trusted === phone_number,
      );
  
      if (!trusted) {
        return next.handle();
      }
  
      const otp = new OtpOrm();
  
      otp.otp = trusted.code;
      otp.phoneNumber = trusted.phone;
      otp.status = OtpStatusEnum.SENT;
  
      await this.repository.save(otp);
  
      const response: Response = ctx.getResponse();
  
      const now = new Date();
  
      response.header('Retry', now.toISOString());
      response.status(HttpStatus.CREATED).send('OTP is sent');
  
      Logger.debug(
        JSON.stringify({ phone_number }),
        TrustedPhoneInterceptor.name,
      );
  
      return;
    }
  }
  