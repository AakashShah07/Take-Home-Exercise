// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
  ],
})
export class AppModule {}
