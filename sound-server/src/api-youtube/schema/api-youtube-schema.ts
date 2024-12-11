// api-youtube-schema.ts
import { Document, Schema } from 'mongoose';

export interface Video extends Document {
  title: string;
  description: string;
  videoId: string;
  thumbnailUrl: string;
}

export const VideoSchema = new Schema<Video>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoId: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
});
