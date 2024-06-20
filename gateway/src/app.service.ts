import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor (@Inject("BOOKS") private readonly booksClient:ClientProxy){}

  getHello(): string {
    this.booksClient.send({cmd:"hello_book"},{}).subscribe()
    return `Message Triggered In Gateway, ${new Date().getMinutes()}`;
  }

  getAllBooks():any{
    return this.booksClient.send({cmd:"get_all"},"")
  }

  getBookById(id:string):any{
   return this.booksClient.send({cmd:"get_book_by_id"},id)
  }

  createBook(data:any):any{
    return this.booksClient.send({cmd:"create_book"},data)
   }

   updateBook(id:string,data:any):any{
    return this.booksClient.send({cmd:"update_book"},{id,data})
   }

   deleteBook(id:string):any{
    return this.booksClient.send({cmd:"delete_book"},id)
   }

   getUsers():any{
    return this.booksClient.send({cmd:"get_users"},{})
   }
}
