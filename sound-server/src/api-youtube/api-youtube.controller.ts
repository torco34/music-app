// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
//   Query,
// } from '@nestjs/common';

// import { ApiYoutubeService } from './api-youtube.service';
// import { CreateApiYoutubeDto } from './dto/create-api-youtube.dto';
// import { UpdateApiYoutubeDto } from './dto/update-api-youtube.dto';

// @Controller('api-youtube')
// export class ApiYoutubeController {
//   constructor(private readonly apiYoutubeService: ApiYoutubeService) {}

//   @Post()
//   create(@Body() createApiYoutubeDto: CreateApiYoutubeDto) {
//     return this.apiYoutubeService.create(createApiYoutubeDto);
//   }

//   @Get()
//   findAll() {
//     return this.apiYoutubeService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.apiYoutubeService.findOne(id);
//   }

//   @Get('search')
//   search(@Query('query') query: string) {
//     return this.apiYoutubeService.searchYouTube(query);
//   }

//   @Put(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateApiYoutubeDto: UpdateApiYoutubeDto,
//   ) {
//     return this.apiYoutubeService.update(id, updateApiYoutubeDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.apiYoutubeService.remove(id);
//   }
// }
import { Controller, Get, Query } from '@nestjs/common';

import { ApiYoutubeService } from './api-youtube.service';

@Controller('api-youtube')
export class ApiYoutubeController {
  constructor(private readonly apiYoutubeService: ApiYoutubeService) {}

  @Get('search')
  async searchYouTube(@Query('q') query: string) {
    if (!query) {
      return { message: 'Please provide a search query' };
    }

    return await this.apiYoutubeService.searchYouTube(query);
  }
}
