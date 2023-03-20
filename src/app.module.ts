import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/utils/database/database.module';
import { CoinpaymentsModule } from './coinpayments/coinpayments.module';

@Module({
  imports: [DatabaseModule, CoinpaymentsModule],
  controllers: [],
  providers: [],
})

export class AppModule { }
