import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateReservationDto } from './dto/reservations.dto';
import { Reservation } from './entity/reservation.entity';

@Injectable()
export class ReservationsService {
    constructor(
        @InjectRepository(Reservation)
        private reservationsRepository: Repository<Reservation>,
    ){}

    // Find all reservations
    async findAll(): Promise<Reservation[]>{
        return await this.reservationsRepository.find();
    }

    // Find One reservation by id
    async findOne(id: string): Promise<Reservation>{
        return await this.reservationsRepository.findOne(id);
    }

    // Create a new reservation
    async create(createReservationDto: CreateReservationDto): Promise<Reservation>{
        const newReservation = new Reservation();
        newReservation.firstName = createReservationDto.firstName;
        newReservation.lastName = createReservationDto.lastName;
        newReservation.email = createReservationDto.email;
        newReservation.tel = createReservationDto.tel;
        newReservation.pick_up_date = createReservationDto.pick_up_date;
        newReservation.pick_up_location = createReservationDto.pick_up_location;
        newReservation.nbrDays = createReservationDto.nbrDays;
        newReservation.payment_method = createReservationDto.payment_method;
        newReservation.car_id = createReservationDto.car_id;
        return await newReservation.save();
    }

    // Delete a reservation By id
    async delete(id: string): Promise<void>{
        await this.reservationsRepository.delete(id);
    }

    // Update a reservation by id
    async updateReservation(reservation: Reservation, updateReservationDto: CreateReservationDto): Promise<Reservation> {
        const {
            firstName,
            lastName,
            email,
            tel,
            pick_up_date,
            pick_up_location,
            nbrDays,
            payment_method,
            car_id
        } = updateReservationDto;
        reservation.firstName = firstName;
        reservation.lastName = lastName;
        reservation.email = email;
        reservation.tel = tel;
        reservation.pick_up_date = pick_up_date;
        reservation.pick_up_location = pick_up_location;
        reservation.nbrDays = nbrDays;
        reservation.payment_method = payment_method;
        reservation.car_id = car_id;
        await reservation.save();
        return reservation;
    }
}
