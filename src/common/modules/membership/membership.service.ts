import { Injectable } from '@nestjs/common';
import { CreateMembershipDto } from './dtos/create_membership.dto';
import { Membership } from './entity/membership.entity';
import { MembershipRepository } from './membership.repository';

@Injectable()
export class MembershipService {
  constructor(private membershipRepository: MembershipRepository) {}

  create(createMembershipDto: CreateMembershipDto) {
    try {
      return this.membershipRepository.createMembership(createMembershipDto);
    } catch (error) {
      console.log(error);
    }
  }

  findAll(): Promise<Membership[]> {
    try {
      return this.membershipRepository.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  findById(id: number) {
    try {
      return this.membershipRepository.findById(id);
    } catch (error) {
      console.log(error);
    }
  }
}
