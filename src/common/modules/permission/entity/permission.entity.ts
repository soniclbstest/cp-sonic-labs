import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PermissionMembership } from '../../permission_membership/entity/permission_membership.entity';

@Entity({ name: 'permissions' })
export class Permission {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  description: string;

  @OneToMany(
    () => PermissionMembership,
    (permissionMembership) => permissionMembership.permission,
  )
  permissionMemberships: PermissionMembership[];

  @Column({ default: true })
  status: boolean;
}
