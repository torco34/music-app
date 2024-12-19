// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';

// import { AuthService } from './auth.service';
// import { JwtStrategy } from './jwt.strategy';

// @Module({
//   imports: [
//     JwtModule.register({
//       secret: process.env.JWT_SECRET_KEY,
//       signOptions: { expiresIn: '1h' },
//     }),
//   ],
//   providers: [AuthService, JwtStrategy],
//   exports: [AuthService], // Exportar para que otros módulos puedan usar AuthService
// })

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
  ], // Registramos el módulo JWT
  providers: [AuthService, JwtStrategy], // Proveemos el servicio y la estrategia JWT
  controllers: [AuthController], // Usamos el controlador de autenticación
})
export class AuthModule {}
