import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from '../payment/entity/payment.entity';
import { Permission } from '../permission/entity/permission.entity';
import { User } from '../user/entity/user.entity';
import { Membership } from './entity/membership.entity';
import { MembershipController } from './membership.controller';
import { MembershipService } from './membership.service';

@Module({
  imports: [TypeOrmModule.forFeature([Membership, User, Permission, Payment])],
  controllers: [MembershipController],
  providers: [MembershipService],
})
export class MembershipModule {}
