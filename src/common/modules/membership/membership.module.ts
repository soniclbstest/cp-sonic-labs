import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from '../payment/entity/payment.entity';
import { Permission } from '../permission/entity/permission.entity';
import { User } from '../user/entity/user.entity';
import { Membership } from './entity/membership.entity';
import { MembershipController } from './membership.controller';
import { MembershipRepository } from './membership.repository';
import { MembershipService } from './membership.service';
import { PermissionMembership } from '../permission_membership/entity/permission_membership.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Membership,
      User,
      Permission,
      Payment,
      PermissionMembership,
    ]),
  ],
  controllers: [MembershipController],
  providers: [MembershipService, MembershipRepository],
  exports: [MembershipRepository, MembershipService],
})
export class MembershipModule {}
