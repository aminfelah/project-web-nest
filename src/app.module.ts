/* eslint-disable */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking-module/booking.module';
import * as dotenv from 'dotenv'


dotenv.config()
@Module({
  imports: [ 
    BookingModule,
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    })
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
