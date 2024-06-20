import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Crud-Micro';
  }
  getMessage(data:{}){
console.log("Message Received From Gateway",new Date().getMinutes())
return data
  }
}
