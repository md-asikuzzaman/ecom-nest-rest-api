import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  // My test service method
  getAllUsers(): string {
    return 'This action returns all users';
  }

  // full users data

  fullUsersData(createUserDto: CreateUserDto): CreateUserDto {
    return createUserDto;
  }
}
