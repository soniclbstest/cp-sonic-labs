import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/utils/database/database.module';
import { CoinpaymentsModule } from './coinpayments/coinpayments.module';
import { PaymentModule } from './common/modules/payment/payment.module';
import { UserModule } from './common/modules/user/user.module';
import { MembershipModule } from './common/modules/membership/membership.module';
import { RoleModule } from './common/modules/role/role.module';
import { GiftModule } from './common/modules/gift/gift.module';
import { VoucherModule } from './common/modules/voucher/voucher.module';
import { PermissionModule } from './common/modules/permission/permission.module';
import { CoinReviewPollModule } from './common/modules/coin_review_poll/coin_review_poll.module';
import { VideoPollModule } from './common/modules/video_poll/video_poll.module';
import { UserCoinReviewPollModule } from './common/modules/user_coin_review_poll/user_coin_review_poll.module';
import { UserVideoPollModule } from './common/modules/user_video_poll/user_video_poll.module';

@Module({
  imports: [
    CoinpaymentsModule,
    UserModule,
    RoleModule,
    MembershipModule,
    GiftModule,
    VoucherModule,
    PermissionModule,
    CoinReviewPollModule,
    VideoPollModule,
    PaymentModule,
    UserCoinReviewPollModule,
    UserVideoPollModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
