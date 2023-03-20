import { CoinReviewPoll } from '../../coin_review_poll/entity/coin_review_poll.entity';
import { User } from '../../user/entity/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'user_coin_review_polls' })
export class UserCoinReviewPoll {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  voted_option: number;

  @ManyToOne(
    () => CoinReviewPoll,
    (coinReviewPoll) => coinReviewPoll.user_coin_review_polls,
  )
  @JoinTable()
  coin_review_poll: CoinReviewPoll;

  @ManyToOne(() => User, (user) => user.user_coin_review_polls)
  @JoinTable()
  user: User;

  @Column({ default: true })
  status: boolean;
}
