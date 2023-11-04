// import { Controller } from '@nestjs/common';

// @Controller('user')
// export class UserController {}
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateRegistrationDto } from './create-registration.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUser() {
    const user = await this.userService.getuser();
  }

  @Get(':registrationId')
  async getRegistration(@Param('registrationId') userId) {
    const user = await this.userService.getUser(userId);
    return user;
  }

  @Post()
  async adduser(@Body() CreateRegistrationDto: CreateRegistrationDto) {
    const user = await this.userService.addUser(CreateRegistrationDto);
    return user;
  }

  @Delete()
  async deleteUser(@Query() query) {
    const user = await this.userService.deleteUser(query.userId);
    return user;
  }
}
