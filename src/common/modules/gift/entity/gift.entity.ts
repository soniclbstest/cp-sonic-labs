import { User } from '../../user/entity/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { Gender } from '../types/gift.types';

@Entity({ name: 'gifts' })
export class Gift {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'enum', enum: Gender, default: Gender.MALE })
  gender: Gender;

  @Column()
  size: string;

  @Column()
  street: string;

  @Column()
  apartment: string;

  @Column()
  city: string;

  @Column()
  postal_code: number;

  @Column()
  country: string;

  @ManyToOne(() => User, (user) => user.gifts)
  @JoinTable()
  user: User;

  @Column({ default: true })
  status: boolean;
}
