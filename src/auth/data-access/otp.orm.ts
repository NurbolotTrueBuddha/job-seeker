import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OtpStatusEnum } from '../enum/otp-status.enum';

@Entity({ name: 'user_otp_requests' })
export class OtpOrm {
  @PrimaryGeneratedColumn('uuid')
  readonly requestId: string;

  @Column({ type: 'int' }) // изменение типа на 'int' для MySQL
  otp: number;

  @Column({ type: 'varchar', length: 15 }) // изменение длины на 15 для MySQL
  phoneNumber: string;

  @Column({
    type: 'varchar',
    length: 25,
    nullable: true,
  })
  otpType: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // изменение типа и значения по умолчанию для MySQL
  sentAt: Date;

  @Column({
    type: 'enum',
    enum: OtpStatusEnum,
    default: OtpStatusEnum.SENT,
  })
  status: OtpStatusEnum;

  @Column({ nullable: true })
  smsId: string;
}
