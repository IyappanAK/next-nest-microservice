import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';


@Module({
  imports: [BooksModule, MongooseModule.forRoot('mongodb+srv://iyappank936:fyqt6PO6XKQ05Err@learningcluster.gzfjtq0.mongodb.net/?retryWrites=true&w=majority&appName=LearningCluster',{dbName: 'Nest'}), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
