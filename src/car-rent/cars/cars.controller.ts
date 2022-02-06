import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './entity/car.entity';
import { CarsService } from './cars.service';
import {NotFoundException} from '@nestjs/common'

@Controller('cars')
export class CarsController {

    // Dependency Injection
    constructor(private readonly carsService: CarsService){}
    
    // Get all cars
    @Get()
    findAllCars(): Promise<Car[]> {
        return this.carsService.findAll();
    }

    // Get one car by id
    @Get(':id')
    async findOneCar(@Param('id') id): Promise<Car> {
        const car: Car = await this.carsService.findOne(id);
        if (!car){
            throw new NotFoundException('Car Not Found');
        }
        return car;
    }

    // SELECT DISTINCT brand FROM `car` WHERE 1
    // Find car by brand
    @Get('all/brands')
    async findAllBrands(): Promise<string[]> {
        return this.carsService.findAllBrand();
    }
    @Get('brands/:brand')
    async findByBrand(@Param('brand') brand): Promise<Car[]> {
        return this.carsService.findByBrand(brand);
    }

    // SELECT DISTINCT year FROM `car` WHERE 1
    // Find car by year
    @Get('all/years')
    async findAllYears(): Promise<number[]> {
        return this.carsService.findAllYears();
    }
    @Get('years/:year')
    async findByYear(@Param('year') year): Promise<Car[]> {
        return this.carsService.findByYear(year);
    }
    
    
    // SELECT DISTINCT car_class FROM `car` WHERE 1
    // Find car by car class
    @Get('all/car_classes')
    async findAllCarClasses(): Promise<string[]> {
        return this.carsService.findAllClasses();
    }
    @Get('classes/:class')
    async findByCarClass(@Param('class') car_class): Promise<Car[]> {
        return this.carsService.findByCarClass(car_class);
    }

    // SELECT DISTINCT car_type FROM `car` WHERE 1
    // Find car by car class
    @Get('all/car_types')
    async findAllCarTypes(): Promise<string[]> {
        return this.carsService.findAllTypes();
    }
    @Get('types/:type')
    async findByCarType(@Param('type') type): Promise<Car[]> {
        return this.carsService.findByCarType(type);
    }

    // SELECT DISTINCT hasAC FROM `car` WHERE 1
    // Find car having AC
    @Get('airconditioner/:ac')
    async findByAC(@Param('ac') ac): Promise<Car[]> {
        return this.carsService.findByAC(ac);
    }

    // SELECT DISTINCT fuel_policy FROM `car` WHERE 1
    // Find car by fuel policy
    @Get('all/fuel_policies')
    async findAllFuelPolicies(): Promise<string[]> {
        return this.carsService.findAllFuelPolicies();
    }
    @Get('fuelpolicy/:fuelpolicy')
    async findByFuelPolicy(@Param('fuelpolicy') fuelpolicy): Promise<Car[]> {
        return this.carsService.findByFuelPolicy(fuelpolicy);
    }

    // SELECT DISTINCT color FROM `car` WHERE 1
    // Find car by color
    @Get('all/colors')
    async findAllColors(): Promise<string[]> {
        return this.carsService.findAllColors();
    }
    @Get('colors/:color')
    async findByColor(@Param('color') color): Promise<Car[]> {
        return this.carsService.findByColor(color);
    }

    // Add a car
    @Post()
    addCar(@Body() createCarDto: CreateCarDto): Promise<Car>{
        return this.carsService.create(createCarDto);
    }

    // Delete a car by id
    @Delete(':id')
    async delete(@Param('id') id): Promise<Car[]> {
        const car: Car = await this.carsService.findOne(id);
        if (!car){
            throw new NotFoundException('Car Not Found');
        }
        await this.carsService.delete(id);
        return this.carsService.findAll();
    }

    @Put('/:id')
    async updateCar(
        @Param('id') id: string,
        @Body() updateCarDto: CreateCarDto,
    ): Promise<Car> {
        const car: Car = await this.carsService.findOne(id);
        if (!car){
            throw new NotFoundException('Car Not Found');
        }
        return await this.carsService.updateCar(car, updateCarDto);
    }
}
