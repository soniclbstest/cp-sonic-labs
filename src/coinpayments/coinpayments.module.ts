import { Module } from '@nestjs/common';
import { CoinpaymentsService } from './coinpayments.service';
import { CoinpaymentsController } from './coinpayments.controller';
import { PaymentModule } from 'src/common/modules/payment/payment.module';
import { UserModule } from 'src/common/modules/user/user.module';
import { MembershipModule } from 'src/common/modules/membership/membership.module';

@Module({
  imports: [
    PaymentModule,
    UserModule,
    MembershipModule
  ],
  providers: [CoinpaymentsService],
  controllers: [CoinpaymentsController]
})

export class CoinpaymentsModule { }
