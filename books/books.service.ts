import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepo: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.bookRepo.find();
  }

  create(book: Partial<Book>): Promise<Book> {
    const newBook = this.bookRepo.create(book);
    return this.bookRepo.save(newBook);
  }
}
