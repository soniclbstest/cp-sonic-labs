import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePermissionMembershipDto } from './dtos/create_permission_membership.dto';
import { PermissionMembership } from './entity/permission_membership.entity';
import { PermissionMembershipService } from './permission_membership.service';

@Controller('permission-membership')
export class PermissionMembershipController {
  constructor(
    private readonly permissionMembershipService: PermissionMembershipService,
  ) {}

  // Create PermissionMembership
  // api/permission-membership
  @Post()
  create(@Body() createPermissionMembershipDto: CreatePermissionMembershipDto) {
    return this.permissionMembershipService.create(
      createPermissionMembershipDto,
    );
  }

  // Get All Permission Memberships
  // api/permission-membership
  @Get()
  findAll(): Promise<PermissionMembership[]> {
    return this.permissionMembershipService.findAll();
  }

  // Get User By Membership Id
  // api/permission-membership/:membershipId
  @Get(':membershipId')
  findById(@Param('membershipId') membershipId: string) {
    return this.permissionMembershipService.findById(+membershipId);
  }
}
