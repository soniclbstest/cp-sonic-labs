import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePermissionDto {
  @IsString()
  @IsNotEmpty({ message: 'Please add a description' })
  description: string;
}
