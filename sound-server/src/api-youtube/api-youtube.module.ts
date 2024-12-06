import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApiYoutubeController } from './api-youtube.controller';
import { ApiYoutubeService } from './api-youtube.service';
import { VideoSchema } from './schema/api-youtube-schema'; // Importa correctamente la interfaz y el esquema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Video', schema: VideoSchema }]), // Usamos 'Video' como nombre de modelo
  ],
  controllers: [ApiYoutubeController],
  providers: [ApiYoutubeService],
})
export class ApiYoutubeModule {}
