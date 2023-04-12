import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  IsBoolean,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreatePermissionMembershipDto {
  @IsNumber()
  @IsNotEmpty({ message: 'Please add a membership Id' })
  membershipId: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Please add a permission Id' })
  permissionId: number;
}
