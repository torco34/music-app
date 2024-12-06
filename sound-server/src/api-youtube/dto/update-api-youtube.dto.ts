// import { PartialType } from '@nestjs/swagger';
// import { CreateApiYoutubeDto } from './create-api-youtube.dto';

// export class UpdateApiYoutubeDto extends PartialType(CreateApiYoutubeDto) {}
export class UpdateApiYoutubeDto {
  readonly title?: string; // Los campos son opcionales porque no siempre queremos actualizar todos los detalles
  readonly description?: string;
  readonly thumbnailUrl?: string;
  readonly videoUrl?: string;
}
