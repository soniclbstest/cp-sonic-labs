import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateMembershipDto {
  @IsString()
  @IsNotEmpty({ message: 'Please add a mambership name' })
  name: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Please add a monthly payment value' })
  monthly_payment: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Please add a yearly payment value' })
  yearly_payment: number;
}
