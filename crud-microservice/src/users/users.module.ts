import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersSchema } from 'src/schema/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: UsersSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
