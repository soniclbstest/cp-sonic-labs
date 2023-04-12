import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  IsBoolean,
  IsOptional,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Please add a your first name' })
  @MinLength(2, { message: 'Input minimun 2 charactors to first name' })
  first_name: string;

  @IsString()
  @IsNotEmpty({ message: 'Please add a your last name' })
  @MinLength(2, { message: 'Input minimun 2 charactors to last name' })
  last_name: string;

  @IsString()
  @Matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
    message: 'Please add a valid email',
  })
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsBoolean()
  @IsNotEmpty({ message: 'Please enter your marketing acceptance' })
  isAgreeToTermsAndConditions: boolean;

  @IsOptional()
  @Length(6)
  verification_code?: number;
}
