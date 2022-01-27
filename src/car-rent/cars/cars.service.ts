import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';

import { Car } from './entity/car.entity';

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(Car)
        private carsRepository: Repository<Car>,
    ){}

    // Find all cars
    async findAll(): Promise<Car[]>{
        return await this.carsRepository.find();
    }
    
    // Find car by brand
    async findAllBrand(): Promise<string[]>{
        var x: Car[] = [];
        var y: string[] = [];
        x = await this.carsRepository.query("SELECT DISTINCT brand FROM `car` WHERE 1 ;")
        y = x.map(function(item) {
            return item['brand'];
        });;
        return y;
    }
    async findByBrand(brand: string): Promise<Car[]>{
        return await this.carsRepository.query("SELECT * FROM `car` where car.brand = '"+brand+"' ;");
    }
    
    // Find car by year
    async findAllYears(): Promise<number[]>{
        var x: Car[] = [];
        var y: number[] = [];
        x = await this.carsRepository.query("SELECT DISTINCT year FROM `car` WHERE 1 ;")
        y = x.map(function(item) {
            return item['year'];
        });
        return y;
    }
    async findByYear(year: number): Promise<Car[]>{
        return await this.carsRepository.query("SELECT * FROM `car` where car.year = '"+year+"' ;");
    }
    
    // Find car by car class
    async findAllClasses(): Promise<string[]>{
        var x: Car[] = [];
        var y: string[] = [];
        x = await this.carsRepository.query("SELECT DISTINCT car_class FROM `car` WHERE 1 ;")
        y = x.map(function(item) {
            return item['car_class'];
        });;
        return y;
    }
    async findByCarClass(car_class: string): Promise<Car[]>{
        return await this.carsRepository.query("SELECT * FROM `car` where car.car_class = '"+car_class+"' ;");
    }

    // Find car by car type
    async findAllTypes(): Promise<string[]>{
        var x: Car[] = [];
        var y: string[] = [];
        x = await this.carsRepository.query("SELECT DISTINCT car_type FROM `car` WHERE 1 ;")
        y = x.map(function(item) {
            return item['car_type'];
        });;
        return y;
    }
    async findByCarType(car_type: string): Promise<Car[]>{
        return await this.carsRepository.query("SELECT * FROM `car` where car.car_type = '"+car_type+"' ;");
    }
    
    // Find car by having AC
    async findByAC(ac: boolean): Promise<Car[]>{
        return await this.carsRepository.query("SELECT * FROM `car` where car.hasAC = '"+ac+"' ;");
    }

    // Find car by Fuel policy
    async findAllFuelPolicies(): Promise<string[]>{
        var x: Car[] = [];
        var y: string[] = [];
        x = await this.carsRepository.query("SELECT DISTINCT fuel_policy FROM `car` WHERE 1 ;")
        y = x.map(function(item) {
            return item['fuel_policy'];
        });;
        return y;
    } 
    async findByFuelPolicy(fuel_policy: string): Promise<Car[]>{
        return await this.carsRepository.query("SELECT * FROM `car` where car.fuel_policy = '"+fuel_policy+"' ;");
    }

    // Find car by color
    async findAllColors(): Promise<string[]>{
        var x: Car[] = [];
        var y: string[] = [];
        x = await this.carsRepository.query("SELECT DISTINCT color FROM `car` WHERE 1 ;")
        y = x.map(function(item) {
            return item['color'];
        });;
        return y;
    } 
    async findByColor(color: string): Promise<Car[]>{
        return await this.carsRepository.query("SELECT * FROM `car` where car.color = '"+color+"' ;");
    }

    // Find One car by id
    async findOne(id: string): Promise<Car>{
        return await this.carsRepository.findOne(id);
    }

    // Create a new car
    async create(createCarDto: CreateCarDto): Promise<Car>{
        const newCar = new Car();
        newCar.brand = createCarDto.brand;        
        newCar.model = createCarDto.model;
        newCar.year = createCarDto.year;
        newCar.car_class = createCarDto.car_class;
        newCar.nbrPassengers = createCarDto.nbrPassengers;
        newCar.price_per_day = createCarDto.price_per_day;
        newCar.hasAC = createCarDto.hasAC;
        newCar.car_type = createCarDto.car_type;
        newCar.fuel_policy = createCarDto.fuel_policy;
        newCar.transmission = createCarDto.transmission;
        newCar.color = createCarDto.color;
        newCar.available = createCarDto.available;
        newCar.picture = createCarDto.picture;
        return await newCar.save();
    }

    // Delete a car By id
    async delete(id: string): Promise<void>{
        await this.carsRepository.delete(id);
    }

    // Update a car by id
    async updateCar(car: Car, updateCarDto: CreateCarDto): Promise<Car> {
        const {
            brand,
            model,
            year,
            car_class,
            nbrPassengers,
            price_per_day,
            hasAC,
            car_type,
            fuel_policy,
            transmission,
            color,
            available,
            picture
        } = updateCarDto;
    
        car.brand = brand;        
        car.model = model;
        car.year = year;
        car.car_class = car_class;
        car.nbrPassengers = nbrPassengers;
        car.price_per_day = price_per_day;
        car.hasAC = hasAC;
        car.car_type = car_type;
        car.fuel_policy = fuel_policy;
        car.transmission = transmission;
        car.color = color;
        car.available = available;
        car.picture = picture;
        await car.save();
        return car;
    }
}