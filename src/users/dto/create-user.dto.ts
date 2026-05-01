import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  username!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @Matches(/^[0-9]+$/, { message: 'Phone must be numeric' })
  @Length(10, 15)
  phone!: string;

  @IsString()
  @IsNotEmpty()
  address!: string;

  @IsString()
  @IsOptional()
  country?: string;
}
