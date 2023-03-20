import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { CoinReviewPoll } from '../coin_review_poll/entity/coin_review_poll.entity';
import { UserCoinReviewPoll } from './entity/user_coin_review_polls.entity';
import { UserCoinReviewPollController } from './user_coin_review_poll.controller';
import { UserCoinReviewPollService } from './user_coin_review_poll.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserCoinReviewPoll, CoinReviewPoll, User]),
  ],
  controllers: [UserCoinReviewPollController],
  providers: [UserCoinReviewPollService],
})
export class UserCoinReviewPollModule {}
