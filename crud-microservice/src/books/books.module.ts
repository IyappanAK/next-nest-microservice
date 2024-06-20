import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksSchema } from 'src/schema/books.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Book", schema: BooksSchema }])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
