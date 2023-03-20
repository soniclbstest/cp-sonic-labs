import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { IsNumber } from 'class-validator/types/decorator/decorators';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Please add a your first name' })
  @MinLength(2, { message: 'Input minimun 2 charactors to first name' })
  @MaxLength(30, { message: 'Input maximum 30 charactors to first name' })
  first_name: string;

  @IsString()
  @IsNotEmpty({ message: 'Please add a your last name' })
  @MinLength(2, { message: 'Input minimun 2 charactors to last name' })
  @MaxLength(30, { message: 'Input maximum 30 charactors to last name' })
  last_name: string;

  @IsString()
  @Matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
    message: 'Please add a valid email',
  })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Please add a your user name' })
  @MinLength(4, { message: 'Input minimun 4 charactors to user name' })
  @MaxLength(30, { message: 'Input maximum 30 charactors to user name' })
  username: string;

  @IsString()
  @Matches(
    /^(?:\+?\d{1,3}[\s-]?)?(?:\(\d{1,4}\)|\d{1,4})[\s-]?\d{1,4}[\s-]?\d{1,4}$/,
    { message: 'Please add a valid phone number' },
  )
  @IsNotEmpty({ message: 'Please add a your phone number' })
  phone_number: string;

  @IsString()
  @IsNotEmpty({ message: 'Please add a your street' })
  street: string;

  @IsString()
  @IsNotEmpty({ message: 'Please add a your apartment' })
  apartment: string;

  @IsString()
  @IsNotEmpty({ message: 'Please add a your city' })
  city: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Please add a your postal code' })
  postal_code: string;

  @IsString()
  @IsNotEmpty({ message: 'Please add a your city' })
  country: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;

  @IsBoolean()
  @IsNotEmpty({ message: 'Please enter your marketing acceptance' })
  isAgreeToTermsAndConditions: boolean;

  @IsOptional()
  verification_code?: number;
}
