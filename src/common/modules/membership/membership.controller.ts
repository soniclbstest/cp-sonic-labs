import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMembershipDto } from './dtos/create_membership.dto';
import { MembershipService } from './membership.service';

@Controller('api/membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Post()
  create(@Body() createMembershipDto: CreateMembershipDto) {
    return this.membershipService.create(createMembershipDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.membershipService.findById(+id);
  }
}
