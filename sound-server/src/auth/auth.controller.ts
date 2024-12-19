import { Body, Controller, Post } from '@nestjs/common';

import { LoginDto } from '../users/dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Ruta para iniciar sesión y obtener el token
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto); // Genera el token JWT
  }
}
