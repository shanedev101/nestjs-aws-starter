import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(process.env.PORT ?? 3333)
    .then(() => {
      Logger.log('Application is running ', 'Bootstrap');
    })
    .catch((error) => {
      Logger.error(error, 'Bootstrap');
    });
}

void bootstrap();
