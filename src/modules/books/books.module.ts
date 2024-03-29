/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { booksProviders } from './books.provider';

@Module({
  providers: [BooksService, ...booksProviders],
  controllers: [BooksController]
})
export class BooksModule { }
