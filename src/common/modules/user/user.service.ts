import { Injectable } from '@nestjs/common';
import { MembershipRepository } from '../membership/membership.repository';
import { UpdateUserMembershipDto } from './dtos/update_user_membership.dto';
import { User } from './entity/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private memberRepository: MembershipRepository,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      return this.userRepository.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: number) {
    try {
      return this.userRepository.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async updateUserMembership(
    id: number,
    updateUserMembershipDto: UpdateUserMembershipDto,
  ) {
    try {
      const membership = await this.memberRepository.findById(
        updateUserMembershipDto.membershipId,
      );
      console.log(membership);
      return this.userRepository.updateUserMembership(id, membership);
    } catch (error) {
      console.log(error);
    }
  }
}
