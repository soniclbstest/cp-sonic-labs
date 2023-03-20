import { User } from '../../user/entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'roles' })
export class Role {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  status: boolean;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
