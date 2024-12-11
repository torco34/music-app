import { BadRequestException, Controller, Get, Query } from '@nestjs/common';

import { ApiYoutubeService } from './api-youtube.service';
import { Video } from './schema/api-youtube-schema';

@Controller('api-youtube')
export class ApiYoutubeController {
  constructor(private readonly apiYoutubeService: ApiYoutubeService) {}

  @Get('search')
  async searchYouTube(@Query('q') query: string): Promise<Video[]> {
    if (!query) {
      throw new BadRequestException('Please provide a search query');
    }

    try {
      return await this.apiYoutubeService.searchYouTube(query);
    } catch (error) {
      throw new BadRequestException('Error fetching data from YouTube API');
    }
  }
}
