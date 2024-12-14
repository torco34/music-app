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
      const videos = response.data.items.map((item: any) => ({
        title: item.snippet.title,
        description: item.snippet.description,
        videoId: item.id.videoId,
        thumbnailUrl: item.snippet.thumbnails.high.url,
      }));

      // Opcional: guardar los videos en la base de datos
      // await this.videoModel.insertMany(videos, { ordered: false });

      return videos;
    } catch (error) {
      console.error('Error fetching data from YouTube API:', error.message);
      throw new Error('Unable to fetch data from YouTube API');
    }
  }
}
