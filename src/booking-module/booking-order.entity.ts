/* eslint-disable */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BookingOrderEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    serviceType : string;

    @Column()
    packageType: string;

    @Column({ nullable: true })
    numberOfBags: number;

    @Column()
    fastTrack: boolean;

    @Column()
    upgrade: boolean;

    @Column()
    additionalBags: boolean;

    @Column()
    destination: string;

    @Column({ type: 'date' })
    dateFlight: string;

    @Column()
    timesFlight: string;
    
    @Column({ type: 'date' })
    datePickUpOrDropOff: string;

    @Column()
    timePickUpOrDropOff: string;

    @Column()
    airline: string;

    @Column()
    address: string;

    @Column('text')
    comment: string;

    @Column()
    price: number;

    @Column()
    paymentMethod: string;
    
    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    email: string;
    
    @Column()
    phoneNumber: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}