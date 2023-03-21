import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Membership } from '../membership/entity/membership.entity';
import { Repository } from 'typeorm';
import { CreateMembershipDto } from './dtos/create_membership.dto';

@Injectable()
export class MembershipRepository {
  constructor(
    @InjectRepository(Membership)
    private membershipRepository: Repository<Membership>,
  ) { }

  async createMembership(
    createMembershipDto: CreateMembershipDto,
  ): Promise<Membership> {
    try {
      const { name, monthly_payment, yearly_payment } = createMembershipDto;

      const newMembership = this.membershipRepository.create({
        name,
        monthly_payment,
        yearly_payment,
      });
      console.log(newMembership);
      return this.membershipRepository.save(newMembership);
    } catch (error) {
      console.log(error)
      throw new Error('Method not implemented.');
    }
  }

  findAll(): Promise<Membership[]> {
    try {
      return this.membershipRepository.find();
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  findById(id: number): Promise<Membership> {
    try {
      return this.membershipRepository.findOneBy({
        id: id,
      });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
