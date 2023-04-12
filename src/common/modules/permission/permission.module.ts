import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Membership } from '../membership/entity/membership.entity';
import { Permission } from './entity/permission.entity';
import { PermissionController } from './permission.controller';
import { PermissionRepository } from './permission.repository';
import { PermissionService } from './permission.service';
import { PermissionMembership } from '../permission_membership/entity/permission_membership.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Permission, Membership, PermissionMembership]),
  ],
  controllers: [PermissionController],
  providers: [PermissionService, PermissionRepository],
  exports: [PermissionRepository],
})
export class PermissionModule {}
