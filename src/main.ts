import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // validator에 도달하지 못하게 함.
      forbidNonWhitelisted: true, // 차단, 보안 강화
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
