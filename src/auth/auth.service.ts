import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.validateUser(authLoginDto);

    const payload = {
      userId: user.id,
      userAccountActivated: user.accountActivated,
    };
    delete user.password;
    delete user.accountActivated;
    delete user.accountToken;
    delete user.createdAt;
    delete user.updatedAt;
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }

  async validateUser(authLoginDto: AuthLoginDto): Promise<User> {
    const { email, password } = authLoginDto;
   
    const user = await this.usersService.findByEmail(email);
  
    if (!user.accountActivated){
      throw new UnauthorizedException("user not activated yet ");
    }
    if (!(await user?.validatePassword(password))) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
