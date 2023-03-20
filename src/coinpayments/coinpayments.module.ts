import { Module } from '@nestjs/common';
import { CoinpaymentsService } from './coinpayments.service';
import { CoinpaymentsController } from './coinpayments.controller';

@Module({
  providers: [CoinpaymentsService],
  controllers: [CoinpaymentsController]
})
export class CoinpaymentsModule {}
