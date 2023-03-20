import { Membership } from '../../membership/entity/membership.entity';
import { Role } from '../../role/entity/role.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { RegisterType, Status } from '../types/user.types';
import { Payment } from '../../payment/entity/payment.entity';
import { Voucher } from '../../voucher/entity/voucher.entity';
import { Gift } from '../../gift/entity/gift.entity';
import { UserCoinReviewPoll } from '../../user_coin_review_poll/entity/user_coin_review_polls.entity';
import { UserVideoPoll } from '../../user_video_poll/entity/user_video_poll.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isAgreeToTermsAndConditions: boolean;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  apartment: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  postal_code: number;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  image_url: string;

  @Column({ default: false })
  is_subscribed_telegram: boolean;

  @Column({ nullable: true })
  telegram_username: string;

  @Column({ default: false })
  is_verifed: boolean;

  @Column()
  verify_code: number;

  @Column({ type: 'enum', enum: RegisterType, default: RegisterType.MANUAL })
  register_type: RegisterType;

  @Column({ nullable: true })
  stripe_customer_id: string;

  @Column({ nullable: true })
  stripe_default_payment_method: string;

  @Column({ nullable: true })
  paypal_customer_id: string;

  @Column({ nullable: true })
  paypal_setup_token_id: string;

  @Column({ nullable: true })
  paypal_payment_token_id: string;

  @Column({ nullable: true })
  paypal_default_payment_method: string;

  @Column({ type: 'enum', enum: Status, default: Status.PENDING })
  status: Status;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @ManyToOne(() => Membership, (membership) => membership.users)
  membership: Membership;

  @OneToMany(
    () => UserCoinReviewPoll,
    (userCoinReviewPoll) => userCoinReviewPoll.user,
    { cascade: true },
  )
  user_coin_review_polls: UserCoinReviewPoll[];

  @OneToMany(() => UserVideoPoll, (userVideoPoll) => userVideoPoll.user, {
    cascade: true,
  })
  user_video_polls: UserVideoPoll[];

  @OneToMany(() => Payment, (payment) => payment.user, { cascade: true })
  payments: Payment[];

  @OneToMany(() => Voucher, (voucher) => voucher.user, { cascade: true })
  vouchers: Voucher[];

  @OneToMany(() => Gift, (gift) => gift.user, { cascade: true })
  gifts: Gift[];
}
