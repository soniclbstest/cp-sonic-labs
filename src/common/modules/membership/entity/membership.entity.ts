import { Payment } from '../../payment/entity/payment.entity';
import { Permission } from '../../permission/entity/permission.entity';
import { User } from '../../user/entity/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'memberships' })
export class Membership {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  monthly_payment: number;

  @Column()
  yearly_payment: number;

  @Column({ default: true })
  status: boolean;

  @OneToMany(() => User, (user) => user.role)
  users: User[];

  @ManyToMany(() => Permission, (permission) => permission.memberships)
  @JoinTable()
  permissions: Permission[];

  @OneToMany(() => Payment, (payment) => payment.membership, {
    cascade: true,
  })
  @JoinTable()
  payments: Payment[];
}
