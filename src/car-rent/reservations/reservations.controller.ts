import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';


import { CreateReservationDto } from './dto/reservations.dto';
import { Reservation } from './entity/reservation.entity';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController {

    // Dependency Injection
    constructor(private readonly reservationsService: ReservationsService){}
    
    // Get all reservations
    @Get()
    findAllReservations(): Promise<Reservation[]> {
        return this.reservationsService.findAll();
    }

    // Get one reservation by id
    @Get(':id')
    async findOneReservation(@Param('id') id): Promise<Reservation> {
        const reservation: Reservation = await this.reservationsService.findOne(id);
        if (!reservation){
            throw new NotFoundException('Reservation Not Found');
        }
        return reservation;
    }

    // Add a reservation
    @Post()
    addReservation(@Body() createReservationDto: CreateReservationDto): Promise<Reservation>{
        return this.reservationsService.create(createReservationDto);
    }

    // Delete a reservation by id
    @Delete(':id')
    async delete(@Param('id') id): Promise<Reservation[]> {
        const reservation: Reservation = await this.reservationsService.findOne(id);
        if (!reservation){
            throw new NotFoundException('Reservation Not Found');
        }
        await this.reservationsService.delete(id);
        return this.reservationsService.findAll();
    }

    @Put('/:id')
    async updateReservation(
        @Param('id') id: string,
        @Body() updateReservationDto: CreateReservationDto,
    ): Promise<Reservation> {
        const reservation: Reservation = await this.reservationsService.findOne(id);
        if (!reservation){
            throw new NotFoundException('Reservation Not Found');
        }
        return await this.reservationsService.updateReservation(reservation, updateReservationDto);
    }   
}
