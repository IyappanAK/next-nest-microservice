import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({cmd:"get_users"})
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern({cmd:"login"})
    login(payload:any){
      return this.usersService.login(payload)
    }

    @MessagePattern({cmd:"create-user"})
    createUser(payload:CreateUserDto){
      return this.usersService.createUser(payload)
    }
  }
  


