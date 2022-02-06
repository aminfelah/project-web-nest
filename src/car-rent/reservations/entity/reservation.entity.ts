import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Reservation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string = uuidv4();

    @Column()
    firstName: string = "";

    @Column()
    lastName: string = "";

    @Column()
    email: string = '';

    @Column()
    tel: number = 0;

    @Column()
    pick_up_date: string;

    @Column()
    pick_up_location: string = '';

    @Column()
    nbrDays: number = 0;

    @Column()
    payment_method: string = "";

    @Column()
    car_id: string = "";   
}