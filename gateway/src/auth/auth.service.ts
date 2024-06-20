import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { payload } from 'src/app.dto';
import { CreateUserDto } from './dto/create-auth.dto';


@Injectable()
export class AuthService {
  constructor (@Inject("BOOKS") private readonly booksClient:ClientProxy){}

 async getUsers(){
    return this.booksClient.send({cmd:"get_users"},{})
  }
  async login(payload:CreateUserDto){
    return this.booksClient.send({cmd:"login"},payload)
  }
  async createNewUser(payload:CreateUserDto){
return this.booksClient.send({cmd:"create-user"},payload)
  }
}
