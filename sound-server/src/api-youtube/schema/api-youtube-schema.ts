// api-youtube-schema.ts
import { Document, Schema } from 'mongoose';

// Define la interfaz del video
export interface Video extends Document {
  title: string;
  description: string;
  videoId: string;
  thumbnailUrl: string;
}

// Define el esquema de mongoose para el video
export const VideoSchema = new Schema<Video>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoId: { type: String, required: true, unique: true },
  thumbnailUrl: { type: String, required: true },
});
