import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'; // Usamos bcrypt para la comparación de contraseñas

import { UsersService } from '../users/users.service'; // Importamos el servicio de usuarios para acceder a la base de datos

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, // Usamos el servicio de usuarios
    private jwtService: JwtService, // Usamos el servicio JWT para crear tokens
  ) {}

  // Método para validar al usuario (verifica email y contraseña)
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email); // Buscamos al usuario por su email
    if (!user) {
      return null; // Si no se encuentra el usuario, retornamos null
    }
    const isPasswordValid = await bcrypt.compare(password, user.password); // Comparamos la contraseña
    if (!isPasswordValid) {
      return null; // Si la contraseña es incorrecta, retornamos null
    }
    return user; // Si las credenciales son correctas, retornamos el usuario
  }

  // Método para generar el token JWT
  async login(user: any) {
    const payload = { email: user.email, sub: user._id }; // Creamos el payload del token (puedes agregar más datos si es necesario)
    return {
      access_token: this.jwtService.sign(payload), // Firmamos el token con el payload
    };
  }
}
