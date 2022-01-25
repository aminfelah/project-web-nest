/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { BookingOrderEntity } from './booking-order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class BookingOrderService {
    constructor(
        @InjectRepository(BookingOrderEntity)
        private bookingOrderRepository: Repository<BookingOrderEntity>
        ) { }


    async  findAll(): Promise<BookingOrderEntity[]> {
        return await this.bookingOrderRepository.find();
    }

    async addOrder(order: BookingOrderEntity): Promise<BookingOrderEntity> {
        return await this.bookingOrderRepository.save(order);
    }

    async update(order: BookingOrderEntity): Promise<UpdateResult> {
        return await this.bookingOrderRepository.update(order.id, order);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.bookingOrderRepository.delete(id);
    }
}
