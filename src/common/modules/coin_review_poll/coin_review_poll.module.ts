import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCoinReviewPoll } from '../user_coin_review_poll/entity/user_coin_review_polls.entity';
import { CoinReviewPollController } from './coin_review_poll.controller';
import { CoinReviewPollService } from './coin_review_poll.service';
import { CoinReviewPoll } from './entity/coin_review_poll.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoinReviewPoll, UserCoinReviewPoll])],
  controllers: [CoinReviewPollController],
  providers: [CoinReviewPollService],
})
export class CoinReviewPollModule {}
