import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from 'src/utils/file-uploading.utils';
import { diskStorage } from 'multer';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  create(@Body() createUserDto: CreateUserDto, @UploadedFile() profilepic) {
    
   
    let usercreate=createUserDto
    usercreate['profilepic']=profilepic.filename

    return this.usersService.create(usercreate);
  }
  @Get('/confirm/:token')
  activateAccount(@Param('token') token: string) {
    return this.usersService.activateAccount(token);
  }

  @Get(':email')
  show(@Param('email') email: string) {
    return this.usersService.showByEmail(email);
  }
  @Get('/showpic/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }
}


