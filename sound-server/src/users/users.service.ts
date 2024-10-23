import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schema/user.schema';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10); // Hashea la contraseña
    const newUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    }); // Crea un nuevo usuario con la contraseña hasheada
    return newUser.save(); // Guarda el nuevo usuario en la base de datos
  }
  async login(loginDto: LoginDto): Promise<User> {
    const { email, password } = loginDto;

    // Busca al usuario por email
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // Compara la contraseña ingresada con la almacenada
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    return user; // Retorna el usuario si las credenciales son válidas
  }
}
