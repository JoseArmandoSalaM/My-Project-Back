import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 4000);
}


bootstrap();
