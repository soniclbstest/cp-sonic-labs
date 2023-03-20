import { UserVideoPoll } from '../../user_video_poll/entity/user_video_poll.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'video_polls' })
export class VideoPoll {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  poll_id: string;

  @OneToMany(() => UserVideoPoll, (userVideoPoll) => userVideoPoll.video_poll)
  user_video_polls: UserVideoPoll[];

  @Column({ default: true })
  status: boolean;
}
