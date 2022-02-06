import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Car extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string = uuidv4();

    @Column()
    brand: string = "";

    @Column()
    model: string = "";

    @Column()
    year: number = 1970;

    @Column()
    car_class: string = "";

    @Column()
    nbrPassengers: number = 0;

    @Column()
    price_per_day: number = 0;

    @Column()
    hasAC: boolean = false;

    @Column()
    car_type: string = "";

    @Column()
    fuel_policy: string = "";

    @Column()
    transmission: string = "";   
    
    @Column()
    color: string = ""; 

    @Column()
    available: boolean = true;

    @Column()
    picture: string = "";
}