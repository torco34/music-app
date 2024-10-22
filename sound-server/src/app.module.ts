import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';

dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),

    TodoModule,
    UsersModule,
    ItemsModule,
  ],
  // controllers: [NombreControladorController],
})
export class AppModule {}
