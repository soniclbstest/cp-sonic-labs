import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UpdateUserMembershipDto } from './dtos/update_user_membership.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //   @Post()
  //   create(@Body() createUserDto: CreateUserDto) {
  //     return this.userService.create(createUserDto);
  //   }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.userService.findById(+id);
  }

  @Put('update-user-membership/:id')
  updateUserMembership(
    @Param('id') id: string,
    @Body() updateUserMembershipDto: UpdateUserMembershipDto,
  ) {
    return this.userService.updateUserMembership(+id, updateUserMembershipDto);
  }
}
