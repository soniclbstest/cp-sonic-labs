import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../role/entity/role.entity';
import { Membership } from '../membership/entity/membership.entity';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Payment } from '../payment/entity/payment.entity';
import { Voucher } from '../voucher/entity/voucher.entity';
import { Gift } from '../gift/entity/gift.entity';
import { UserCoinReviewPoll } from '../user_coin_review_poll/entity/user_coin_review_polls.entity';
import { UserVideoPoll } from '../user_video_poll/entity/user_video_poll.entity';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Membership,
      Role,
      Payment,
      Voucher,
      Gift,
      UserCoinReviewPoll,
      UserVideoPoll,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
