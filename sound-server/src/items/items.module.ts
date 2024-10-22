import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Items, itemsSchema } from './schema/items.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Items.name,
        schema: itemsSchema,
      },
    ]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
