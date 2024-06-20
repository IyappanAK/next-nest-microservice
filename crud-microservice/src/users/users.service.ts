import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel("User") private userModel:Model<any>){}
  findAll() {
    return this.userModel.find();
  }

async login(payload:CreateUserDto){
    let user= await this.userModel.where("email").equals(payload.email).where("password").equals(payload.password)
    if(user.length>0){
      return user
  } 
  throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }

  async createUser(payload:CreateUserDto){
    let res=await this.userModel.create({...payload})
    return res
  }

}
