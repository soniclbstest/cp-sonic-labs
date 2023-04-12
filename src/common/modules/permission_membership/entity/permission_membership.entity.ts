import { Membership } from '../../membership/entity/membership.entity';
import { Permission } from '../../permission/entity/permission.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'permission_membership' })
export class PermissionMembership {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Membership, (membership) => membership.permissionMemberships)
  membership: Membership;

  @ManyToOne(() => Permission, (permission) => permission.permissionMemberships)
  permission: Permission;
}
