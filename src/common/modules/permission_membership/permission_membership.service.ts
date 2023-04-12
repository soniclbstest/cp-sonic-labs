import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { MembershipRepository } from '../membership/membership.repository';
import { CreatePermissionMembershipDto } from './dtos/create_permission_membership.dto';
import * as address from 'address';
import { PermissionMembership } from './entity/permission_membership.entity';
import { PermissionMembershipRepository } from './permission_membership.repository';
import { PermissionRepository } from '../permission/permission.repository';

const ip = address.ip();
@Injectable()
export class PermissionMembershipService {
  private readonly logger = new Logger(
    `${ip} src/permission_membership/permission_membership.service.ts`,
  );
  constructor(
    private membershipRepository: MembershipRepository,
    private permissionRepository: PermissionRepository,
    private permissionMembershipRepository: PermissionMembershipRepository,
  ) {}

  async create(createPermissionMembershipDto: CreatePermissionMembershipDto) {
    const membership = await this.membershipRepository.findById(
      createPermissionMembershipDto.membershipId,
    );
    if (!membership) {
      this.logger.error(
        `Not found membership id: ${createPermissionMembershipDto.membershipId}`,
      );
      throw new NotFoundException(
        `Not found membership id: ${createPermissionMembershipDto.membershipId}}`,
      );
    }
    const permission = await this.permissionRepository.findById(
      createPermissionMembershipDto.permissionId,
    );
    if (!permission) {
      this.logger.error(
        `Not found permission id: ${createPermissionMembershipDto.permissionId}`,
      );
      throw new NotFoundException(
        `Not found permission id: ${createPermissionMembershipDto.permissionId}`,
      );
    }
    return this.permissionMembershipRepository.createPermissionMembership(
      membership,
      permission,
    );
  }

  findAll(): Promise<PermissionMembership[]> {
    try {
      return this.permissionMembershipRepository.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  findById(id: number) {
    try {
      return this.permissionMembershipRepository.findByMembershipId(id);
    } catch (error) {
      console.log(error);
    }
  }
}
