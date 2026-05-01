import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get()
  getAll(): string {
    return this.users.getAllUsers();
  }

  @Get('search')
  filterBy(
    @Query('id', ParseIntPipe) id: string,
    @Query('username') username: string,
  ): string {
    return `This action returns user with id ${id} and username ${username}`;
  }

  @Get(':name')
  getByUsername(@Param('name') username: string): string {
    return `This  username ${username}`;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): CreateUserDto {
    return this.users.fullUsersData(createUserDto);
  }
}
