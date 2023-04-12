
import { Gift } from '../../gift/entity/gift.entity';
import { Membership } from '../../membership/entity/membership.entity';
import { Payment } from '../../payment/entity/payment.entity';
import { Role } from '../../role/entity/role.entity';
import { UserCoinReviewPoll } from '../../user_coin_review_poll/entity/user_coin_review_polls.entity';
import { UserVideoPoll } from '../../user_video_poll/entity/user_video_poll.entity';
import { Voucher } from '../../voucher/entity/voucher.entity';
import { RegisterType, Status } from '../types/user.types';

export interface UserAuthResponse {
  success: boolean;
  message: string;
  access_token: string;
}

export interface UserId {
  id: number;
}

export interface UserDetails {
  id: number;
}

export interface UserVerificationDetails {
  first_name: string;
  last_name: string;
  email: string;
  verification_code: number;
}

export interface UserDeactivationDetails {
  first_name: string;
  last_name: string;
  email: string;
}

export interface PublicUserDetails {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  phone_number: string;
  street: string;
  apartment: string;
  city: string;
  postal_code: number;
  country: string;
  // image_url: string;
  is_subscribed_telegram: boolean;
  register_type: RegisterType;
  status: Status;
  role: Role;
  membership: Membership;
  is_verified: boolean;
  user_coin_review_polls: UserCoinReviewPoll[];
  user_video_polls: UserVideoPoll[];
  payments: Payment[];
  vouchers: Voucher[];
  gifts: Gift[];
}
