import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { IBooks } from './entities/books.interface';


@Injectable()
export class BooksService {
constructor(@InjectModel("Book") private bookModel:Model<IBooks>){}

 async create(createBookDto: CreateBookDto):Promise<any> {
   const res=await  this.bookModel.create(createBookDto)
    return res;
  }

  async findAll():Promise<{}> {
    const res=await this.bookModel.find()
    console.log("message received")
    return res;
  }

  async findOne(id: string) {
    const res=await this.bookModel.findById(id)
    return res;
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
 await this.bookModel.findByIdAndUpdate(id,updateBookDto)
 const res=await this.bookModel.findById(id)
    return res;
  }

  async remove(id: string) {
    const res =await this.bookModel.findByIdAndDelete(id)
    return res;
  }

}
