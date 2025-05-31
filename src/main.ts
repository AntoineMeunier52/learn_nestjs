import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //filter for input
  app.useGlobalPipes(
    new ValidationPipe({
      //filter/remove extra extra element in body
      whitelist: true,
      //primitif type conversion /!\huge impact on performance
      //transform: true,
      //reject an error if more element than needed in body
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
