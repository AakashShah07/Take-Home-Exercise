// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from '../books/books.module'; // Import the BooksModule
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'bookuser',
      password: 'mynameiswitcher',
      database: 'bookreview',
      autoLoadEntities: true,
      synchronize: true, // for dev only
    }),
    BooksModule, // Register the BooksModule
  ],
})
export class AppModule {}
