import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { Car } from './cars/entity/car.entity';
import { Reservation } from './reservations/entity/reservation.entity';
import { ReservationsController } from './reservations/reservations.controller';
import { ReservationsService } from './reservations/reservations.service';


@Module({
  imports: [TypeOrmModule.forFeature([Car, Reservation])],
  controllers: [CarsController, ReservationsController],
  providers: [CarsService, ReservationsService],
})
export class CarsModule {}
