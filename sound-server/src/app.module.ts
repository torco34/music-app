import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

import { ApiYoutubeModule } from './api-youtube/api-youtube.module';
import { ItemsModule } from './items/items.module';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    TodoModule,
    UsersModule,
    ItemsModule,
    ApiYoutubeModule,
    AuthModule,
  ],
  // controllers: [NombreControladorController],
})
export class AppModule {}
