// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import axios from 'axios'; // Utilizamos axios para realizar las solicitudes HTTP
// import { Model } from 'mongoose';

// import { CreateApiYoutubeDto } from './dto/create-api-youtube.dto';
// import { UpdateApiYoutubeDto } from './dto/update-api-youtube.dto';
// import { Video } from './schema/api-youtube-schema';

// @Injectable()
// export class ApiYoutubeService {
//   private readonly youtubeApiKey = process.env.API_YOUTUBE; // Obtenemos la clave API desde el archivo .env

//   constructor(@InjectModel('Video') private videoModel: Model<Video>) {}

//   // Método para crear un video
//   create(createApiYoutubeDto: CreateApiYoutubeDto) {
//     const newVideo = new this.videoModel(createApiYoutubeDto);
//     return newVideo.save();
//   }

//   // Método para obtener todos los videos almacenados en la base de datos
//   async findAll() {
//     return await this.videoModel.find().exec();
//   }

//   // Método para obtener un video específico (por ID)
//   async findOne(id: string) {
//     return await this.videoModel.findById(id).exec();
//   }

//   // Método para buscar videos en YouTube por un término de búsqueda
//   async searchYouTube(query: string) {
//     const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${this.youtubeApiKey}`;
//     const response = await axios.get(url);
//     return response.data.items;
//   }

//   // Método para actualizar un video
//   update(id: string, updateApiYoutubeDto: UpdateApiYoutubeDto) {
//     return this.videoModel
//       .findByIdAndUpdate(id, updateApiYoutubeDto, { new: true })
//       .exec();
//   }

//   // Método para eliminar un video
//   remove(id: string) {
//     return this.videoModel.findByIdAndDelete(id).exec(); // Cambiado a findByIdAndDelete
//   }
// }
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';

import { Video } from './schema/api-youtube-schema';

@Injectable()
export class ApiYoutubeService {
  private readonly youtubeApiKey = process.env.API_YOUTUBE;

  constructor(@InjectModel('Video') private videoModel: Model<Video>) {}

  async searchYouTube(query: string): Promise<any> {
    try {
      // URL del endpoint de búsqueda
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${this.youtubeApiKey}`;

      // Realizamos la solicitud HTTP con Axios
      const response = await axios.get(url);

      // Mapear la respuesta para incluir solo los datos relevantes
      const videos = response.data.items.map((item) => ({
        title: item.snippet.title,
        description: item.snippet.description,
        videoId: item.id.videoId,
        thumbnailUrl: item.snippet.thumbnails.high.url,
      }));

      // Opcional: guardar los videos en la base de datos
      await this.videoModel.insertMany(videos, { ordered: false });

      return videos;
    } catch (error) {
      console.error('Error fetching data from YouTube API:', error.message);
      throw new Error('Unable to fetch data from YouTube API');
    }
  }
}
