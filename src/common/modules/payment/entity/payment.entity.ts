import { Membership } from '../../membership/entity/membership.entity';
import { User } from '../../user/entity/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { PaymentMethod, PaymentType } from '../types/payment.types';

@Entity({ name: 'payments' })
export class Payment {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @ManyToOne(() => User, (user) => user.payments)
  @JoinTable()
  user: User;

  @ManyToOne(() => Membership, (membership) => membership.payments)
  @JoinTable()
  membership: Membership;

  @Column()
  payment_id: string;

  @Column()
  amount: number;

  @Column({ type: 'enum', enum: PaymentMethod })
  payment_method: PaymentMethod;

  @Column({ type: 'enum', enum: PaymentType })
  payment_type: PaymentType;

  @Column()
  expire_date: string;

  @Column()
  create_date: string;

  @Column({ default: true })
  status: boolean;
}
