/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingOrderController } from './booking-order.controller';
import { BookingOrderEntity } from './booking-order.entity';
import { BookingOrderService } from './booking-order.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookingOrderEntity])],
  controllers: [BookingOrderController],
  providers: [BookingOrderService]
})
export class BookingModule { }
