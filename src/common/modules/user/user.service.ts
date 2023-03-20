import { Injectable } from '@nestjs/common';
import { UpdateUserMembershipDto } from './dtos/update_user_membership.dto';
import { User } from './entity/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  findAll(): Promise<User[]> {
    try {
      return this.userRepository.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  findById(id: number) {
    try {
      return this.userRepository.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  updateUserMembership(
    id: number,
    updateUserMembershipDto: UpdateUserMembershipDto,
  ) {
    try {
      return this.userRepository.updateUserMembership(
        id,
        updateUserMembershipDto,
      );
    } catch (error) {
      console.log(error);
    }
  }
}
