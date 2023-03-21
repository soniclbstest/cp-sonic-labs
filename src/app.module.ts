import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/utils/database/database.module';
import { CoinpaymentsModule } from './coinpayments/coinpayments.module';
import { PaymentModule } from './common/modules/payment/payment.module';

@Module({
  imports: [DatabaseModule, CoinpaymentsModule, PaymentModule],
  controllers: [],
  providers: [],
})

export class AppModule { }
