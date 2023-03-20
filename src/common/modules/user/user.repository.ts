import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Membership } from '../membership/entity/membership.entity';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UpdateUserMembershipDto } from './dtos/update_user_membership.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    try {
      return this.userRepository.find();
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  findById(id: number): Promise<User> {
    try {
      return this.userRepository.findOneBy({
        id: id,
      });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  updateUserMembership(
    id: number,
    updateUserMembershipDto: UpdateUserMembershipDto,
  ) {
    try {
      return this.userRepository.findOneBy({
        id: id,
      });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
