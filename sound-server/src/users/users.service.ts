import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schema/user.schema';

@Injectable()
export class UsersService {
  findOneByEmail(email: string) {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Método para registrar un nuevo usuario
  async register(createUserDto: CreateUserDto): Promise<User> {
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    // Crear un nuevo usuario
    const newUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });

    // Guardar el usuario en la base de datos
    return newUser.save();
  }

  // Método para iniciar sesión
  async login(loginDto: LoginDto): Promise<{ id: string; email: string }> {
    const { email, password } = loginDto;

    // Buscar el usuario por correo electrónico
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // Comparar la contraseña proporcionada con la almacenada
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // Retornar solo los campos necesarios
    return { id: user._id.toString(), email: user.email };
  }
  // editar
  async updateProfile(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    if (updateUserDto.password) {
      // Hashear la contraseña si se actualiza
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      { $set: updateUserDto },
      { new: true }, // Devuelve el documento actualizado
    );

    if (!updatedUser) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return updatedUser;
  }
}
