import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:9000', // Define el origen permitido
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  // const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API de musicApp')
    .setDescription('documentation API musica')
    .setVersion('1.0')
    .addTag('items')
    .addTag('api-youtube')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
