import { Membership } from '../../membership/entity/membership.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'permissions' })
export class Permission {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  description: string;

  @ManyToMany(() => Membership, (membership) => membership.permissions)
  @JoinTable()
  memberships: Membership[];

  @Column({ default: true })
  status: boolean;
}
