import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as address from 'address';
import { PermissionMembership } from './entity/permission_membership.entity';
import { Membership } from '../membership/entity/membership.entity';
import { Permission } from '../permission/entity/permission.entity';
const ip = address.ip();
@Injectable()
export class PermissionMembershipRepository {
  private readonly logger = new Logger(
    `${ip} src/permission_membership/permission_membership.repository.ts`,
  );
  constructor(
    @InjectRepository(PermissionMembership)
    private permissionMembershipRepository: Repository<PermissionMembership>,
  ) {}

  async createPermissionMembership(
    membership: Membership,
    permission: Permission,
  ): Promise<PermissionMembership> {
    try {
      const newPermissionMembership =
        this.permissionMembershipRepository.create({
          membership,
          permission,
        });
      return this.permissionMembershipRepository.save(newPermissionMembership);
    } catch (error) {
      this.logger.error(`Create PermissionMembership Error: ${error}`);
      throw new Error(`Create PermissionMembership Error: ${error}`);
    }
  }

  findAll(): Promise<PermissionMembership[]> {
    try {
      return this.permissionMembershipRepository.find();
    } catch (error) {
      this.logger.error(`Get All PermissionMemberships Error: ${error}`);
      throw new Error(`Get All PermissionMemberships Error: ${error}`);
    }
  }

  findByMembershipId(membershipId: number): Promise<PermissionMembership[]> {
    try {
      return this.permissionMembershipRepository.find({
        where: { membership: { id: membershipId } },
        relations: ['permission', 'membership'],
      });
    } catch (error) {
      this.logger.error(`Get Permissions By membership Id Error: ${error}`);
      throw new Error(`Get Permissions By membership Id Error: ${error}`);
    }
  }
}
