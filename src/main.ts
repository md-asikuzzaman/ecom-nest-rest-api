import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix
  app.setGlobalPrefix('api');

  // Global validation pipe (VERY IMPORTANT)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove extra fields
      forbidNonWhitelisted: true, // throw error if extra fields exist
      transform: true, // auto type conversion (string → number)
    }),
  );

  // ✅ Enable CORS (frontend connect করার জন্য)
  // app.enableCors({
  //   origin: '*', // production এ specific domain দিবে
  //   credentials: true,
  // });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
