import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  IsOptional,
  IsNumber,
  Length,
} from 'class-validator';

export class UpdateUserInfoDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Please add a your first name' })
  @MinLength(2, { message: 'Input minimun 2 charactors to first name' })
  first_name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Please add a your last name' })
  @MinLength(2, { message: 'Input minimun 2 charactors to last name' })
  last_name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Please add a user name' })
  @MinLength(4, { message: 'Input minimun 4 charactors to user name' })
  username?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
    message: 'Please add a valid email',
  })
  email?: string;

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
  @IsString()
  @IsNotEmpty({ message: 'Please add a postal code' })
  postal_code?: string;

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
  @Length(6)
  verification_code?: number;
}
