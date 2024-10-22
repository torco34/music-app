import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export enum itemsStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

// Define an interface for the document model
export type ItemsDocument = Items & Document;
@Schema()
export class Items {
  @Prop({ required: true })
  title: string;
  @Prop()
  description: string;
}

export const itemsSchema = SchemaFactory.createForClass(Items);
