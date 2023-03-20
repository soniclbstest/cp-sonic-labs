import { UserCoinReviewPoll } from '../../user_coin_review_poll/entity/user_coin_review_polls.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'coin_review_polls' })
export class CoinReviewPoll {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  poll_id: string;

  @OneToMany(
    () => UserCoinReviewPoll,
    (userCoinReviewPoll) => userCoinReviewPoll.coin_review_poll,
  )
  user_coin_review_polls: UserCoinReviewPoll[];

  @Column({ default: true })
  status: boolean;
}
