import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllBooks(){
    return this.appService.getAllBooks()
  }

  // @Get(":id")
  // getBooksById(@Param('id') id:string){
  //   return this.appService.getBookById(id)
  // }

  @Post()
  createBooks(@Body() data:any){
    return this.appService.createBook(data)
  }

  // @Patch(":id")
  // updateBook(@Param('id') id:string,@Body() data:any){
  //  return this.appService.updateBook(id,data)
  // }

  @Delete(":id")
  deleteBook(@Param('id')id:string){
    return this.appService.deleteBook(id)
  }

}
