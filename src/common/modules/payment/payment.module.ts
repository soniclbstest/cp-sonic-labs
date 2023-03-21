import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { Membership } from '../membership/entity/membership.entity';
import { Payment } from './entity/payment.entity';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PaymentRepository } from './payment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, Membership, User])],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentRepository],
  exports: [PaymentService, PaymentRepository]
})
export class PaymentModule { }
