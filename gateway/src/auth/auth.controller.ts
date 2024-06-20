import { Body, Controller, Get, Patch, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getUsers(){
    return this.authService.getUsers()
  }

  @Post()
  login(@Body()payload:CreateUserDto){
    return this.authService.login(payload)
  }

  @Patch()
  createUser(@Body() payload:CreateUserDto){
  return this.authService.createNewUser(payload)
  }
}
