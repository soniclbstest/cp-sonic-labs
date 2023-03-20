import { User } from '../../user/entity/user.entity';
import { VideoPoll } from '../../video_poll/entity/video_poll.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'user_coin_review_polls' })
export class UserVideoPoll {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  voted_option: number;

  @ManyToOne(() => VideoPoll, (videoPoll) => videoPoll.user_video_polls)
  @JoinTable()
  video_poll: VideoPoll;

  @ManyToOne(() => User, (user) => user.user_video_polls)
  @JoinTable()
  user: User;

  @Column({ default: true })
  status: boolean;
}
