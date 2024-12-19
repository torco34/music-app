import {
  Body,
  Controller,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schema/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.register(createUserDto);
  }

  @Post('login')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async login(@Body() loginDto: LoginDto) {
    return this.usersService.login(loginDto);
  }
  @Put('profile')
  @UseGuards(AuthGuard('jwt')) // Solo permite usuarios autenticados
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async updateProfile(
    @(new Request()) req, // Obtén el usuario autenticado del JWT
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const userId = req.user.id; // Extraer ID del token
    return this.usersService.updateProfile(userId, updateUserDto);
  }
}
