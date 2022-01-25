import { Injectable } from '@nestjs/common';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { MailService } from 'src/mail/mail.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private mailService: MailService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const token = Math.floor(
      1000000000 + Math.random() * 9000000000,
    ).toString();
     if (
      await User.findOne({
        where: {
          email: createUserDto.email,
        },
      })
    ) {
      return "user already registred "
    }
    const user = User.create(createUserDto);
    user.accountToken = token;
    user.accountActivated = false;
    await this.mailService.sendUserConfirmation(user, token);
    await user.save();

    delete user.password;
    return user;
  }

  async activateAccount(token: String) {
    this.usersRepository.update(
      { accountToken: token },
      { accountActivated: true },
    );
    return 'User registred and Activated';
  }

  async showById(id: number): Promise<User> {
    const user = await this.findById(id);

    delete user.password;
    return user;
  }

  async findById(id: number) {
    return await User.findOne(id);
  }

  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }
  async showByEmail(email: string) {
    const user =  await User.findOne({
      where: {
        email: email,
      },
    });
    delete user.password;
    delete user.id;
    delete user.updatedAt;
    delete user.createdAt;
    delete user.accountActivated;
    delete user.accountToken;

    return user ;
  }
}
