import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern({cmd:"get_all"})
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern({cmd:"get_book_by_id"})
  findOne(id: string) {
    return this.booksService.findOne(id);
  }

  @MessagePattern({cmd:"create_book"})
  create(createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @MessagePattern({cmd:'update_book'})
   update(payload: UpdateBookDto) {
    return this.booksService.update(payload.id, payload.data);
  }

  @MessagePattern({cmd:'delete_book'})
   remove(id:string) {
    return this.booksService.remove(id);
  }

}
