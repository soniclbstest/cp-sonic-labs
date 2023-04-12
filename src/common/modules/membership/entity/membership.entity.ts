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
import { PermissionMembership } from '../../permission_membership/entity/permission_membership.entity';

@Entity({ name: 'memberships' })
export class Membership {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column({ unique: true })
  name: string;
  @Column({ type: 'float' })
  monthly_payment: number;
  @Column({ type: 'float' })
  yearly_payment: number;
  @Column({ nullable: true })
  stripe_yearly_price_id: string;
  @Column({ nullable: true })
  stripe_monthly_price_id: string;
  @Column({ nullable: true })
  paypal_yearly_price_id: string;
  @Column({ nullable: true })
  paypal_monthly_price_id: string;
  @Column({ default: true })
  status: boolean;

  @OneToMany(() => User, (user) => user.role)
  users: User[];

  @OneToMany(
    () => PermissionMembership,
    (permissionMembership) => permissionMembership.membership,
  )
  permissionMemberships: PermissionMembership[];

  @OneToMany(() => Payment, (payment) => payment.membership)
  payments: Payment[];
}
