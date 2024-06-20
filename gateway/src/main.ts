import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    credentials: true,
  })
  app.useGlobalPipes(new ValidationPipe());

 app.connectMicroservice({
    transport: Transport.TCP,
    options:{ 
      port:3000
    }
 })
  await app.listen(3000);
}
bootstrap();