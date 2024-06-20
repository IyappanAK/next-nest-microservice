import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[ ClientsModule.register([
    {
      name: 'BOOKS',
      transport: Transport.TCP,
      options:{
        port:4000
      }
    },
  ]),],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
