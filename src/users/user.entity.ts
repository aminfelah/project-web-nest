import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import * as bcrypt from 'bcryptjs';
import { IsBoolean, IsString } from 'class-validator';
  
  @Entity()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;
  
    @Column({ unique: true })
    email: string;

    @Column()
    username: string;

    @Column()
    firstname: string;


    @Column()
    lastname: string;
  
    @Column()
    password: string;
  
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    @IsBoolean()
    accountActivated: boolean;
    

    @Column()
    dateOfBirth:String;

    @Column()
    residence:String;

    @Column()
    adress:String;

    @Column()
    phonenumber:String;

    @Column()
    profilepic:String;

    @Column()
    @IsString()
    accountToken: String;
  
    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 8);
    }
  
    async validatePassword(password: string): Promise<boolean> {
      return bcrypt.compare(password, this.password);
    }
  }