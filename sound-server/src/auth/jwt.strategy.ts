import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt'; // Usamos la estrategia JWT

import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtPayload } from './jwt-payload.interface'; // Interfaz que define el contenido del payload

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extraemos el token desde el header Authorization
      secretOrKey: 'secretKey', // La clave secreta para firmar el token (puedes ponerla en una variable de entorno)
    });
  }

  async validate(payload: JwtPayload) {
    return { userId: payload.sub, email: payload.email }; // Validamos el payload y retornamos la información que usamos para identificar al usuario
  }
}
