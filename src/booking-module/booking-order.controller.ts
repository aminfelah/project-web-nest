/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookingOrderEntity } from './booking-order.entity';
import { BookingOrderService } from './booking-order.service';

@Controller('booking-order')
export class BookingOrderController {
    constructor(private bookingOrderService: BookingOrderService) {}

    @Get('getAll')
    getBookingOrders(): Promise<BookingOrderEntity[]> {
      return this.bookingOrderService.findAll();
    } 
     
    @Post('add')
    async addOrder(@Body() details: BookingOrderEntity): Promise<any>{
        return await this.bookingOrderService.addOrder(details);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() details: BookingOrderEntity): Promise<any> {
        details.id = Number(id);
        console.log('Update #' + details.id)
        return this.bookingOrderService.update(details);
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.bookingOrderService.delete(id);
    }  


}
