import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  // Matches,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  username!: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  // @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
  //   message: 'Password must include uppercase, lowercase and number',
  // })
  password!: string;
}
