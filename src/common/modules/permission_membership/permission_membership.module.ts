import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from '../permission/entity/permission.entity';
import { Membership } from '../membership/entity/membership.entity';
import { PermissionMembershipController } from './permission_membership.controller';
import { PermissionMembershipRepository } from './permission_membership.repository';
import { PermissionMembershipService } from './permission_membership.service';
import { PermissionMembership } from './entity/permission_membership.entity';
import { MembershipModule } from '../membership/membership.module';
import { PermissionModule } from '../permission/permission.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Permission, Membership, PermissionMembership]),
    PermissionModule,
    MembershipModule,
  ],
  controllers: [PermissionMembershipController],
  providers: [PermissionMembershipService, PermissionMembershipRepository],
})
export class PermissionMembershipModule {}
