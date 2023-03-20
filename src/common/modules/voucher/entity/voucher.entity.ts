import { User } from '../../user/entity/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'vouchers' })
export class Voucher {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  voucher_code: string;

  @Column()
  expire_date: string;

  @ManyToOne(() => User, (user) => user.vouchers)
  @JoinTable()
  user: User;

  @Column({ default: true })
  status: boolean;
}
