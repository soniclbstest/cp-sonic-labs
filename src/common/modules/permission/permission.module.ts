import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Membership } from '../membership/entity/membership.entity';
import { Permission } from './entity/permission.entity';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';

@Module({
  imports: [TypeOrmModule.forFeature([Permission, Membership])],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermissionModule {}
