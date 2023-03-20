import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateUserMembershipDto {
  @IsNumber()
  @IsNotEmpty({ message: 'Do not have membership Id' })
  membershipId: number;
}
