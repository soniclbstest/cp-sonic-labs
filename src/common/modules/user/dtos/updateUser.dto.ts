import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  IsBoolean,
  IsOptional,
  IsEnum,
  IsNumber,
  Length,
} from 'class-validator';

import { Status } from '../types/user.types';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Please add a your first name' })
  first_name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Please add a your last name' })
  last_name?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
    message: 'Please add a valid email',
  })
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  password?: string;

  @IsOptional()
  @IsBoolean()
  @IsNotEmpty({ message: 'Please enter your marketing acceptance' })
  isAgreeToTermsAndConditions?: boolean;

  @IsOptional()
  @Length(6)
  verification_code?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Please add a user name' })
  @MinLength(4, { message: 'Input minimun 4 charactors to user name' })
  username?: string;

  @IsOptional()
  @IsString()
  @Matches(
    /^(?:\+?\d{1,3}[\s-]?)?(?:\(\d{1,4}\)|\d{1,4})[\s-]?\d{1,4}[\s-]?\d{1,4}$/,
    { message: 'Please add a valid phone number' },
  )
  phone_number?: string;

  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'Input minimun 2 charactors to street' })
  @IsNotEmpty({ message: 'Please add a street name' })
  street?: string;

  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'Input minimun 2 charactors to apartment' })
  @IsNotEmpty({ message: 'Please add a apartment' })
  apartment?: string;

  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'Input minimun 2 charactors to city' })
  @IsNotEmpty({ message: 'Please add a city' })
  city?: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty({ message: 'Please add a postal code' })
  postal_code?: number;

  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'Input minimun 2 charactors to country' })
  @IsNotEmpty({ message: 'Please add a country' })
  country?: string;

  // @IsOptional()
  // @IsString()
  // @Matches(/^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.(jpe?g|png|gif|bmp)$/i, {
  //   message: 'Please add a valid image URL',
  // })
  // @IsNotEmpty({ message: 'Please add a image URL' })
  // image_url?: string;

  @IsOptional()
  @IsBoolean()
  is_subscribed_telegram?: boolean;

  @IsOptional()
  @IsString()
  google_access_token?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Please add a telegram user name' })
  @MinLength(2, { message: 'Input minimun 4 charactors to telegram user name' })
  telegram_username?: string;

  @IsOptional()
  @IsBoolean()
  is_verified?: boolean;

  @IsOptional()
  @IsString()
  @MinLength(2)
  stripe_customer_id?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  stripe_default_payment_method?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  paypal_customer_id?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  paypal_setup_token_id?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  paypal_payment_token_id?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  paypal_default_payment_method?: string;

  @IsOptional()
  @IsEnum([
    Status.ACTIVE,
    Status.BANNED,
    Status.DEACTIVATED,
    Status.INACTIVE,
    Status.PENDING,
  ])
  status?: Status;

  @IsOptional()
  @IsString()
  @Matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
    message: 'Please add a valid email',
  })
  pending_email?: string;

  @IsOptional()
  @IsBoolean()
  is_verified_pending_email?: boolean;
}
