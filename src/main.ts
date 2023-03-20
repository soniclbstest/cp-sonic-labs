import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logtail } from '@logtail/node';
import { WinstonModule } from 'nest-winston';
import { LogtailTransport } from '@logtail/winston';
import * as  winston from 'winston';
import { ValidationPipe } from '@nestjs/common';

const logtail = new Logtail('Yj1PuAEcBxwbZMxzpPiiojK8');


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new LogtailTransport(logtail),
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      ],
    }),
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
