import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';

import { AppModule } from './app.module';
import { config } from '@app/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: ['publications'],
        url: `${config().serviceHostname}:${config().servicePort}`,
        protoPath: path.resolve('proto/publications.proto'),
      },
    },
  );

  app.listen(() =>
    console.log(
      `Microservice ${config().serviceHostname} is listening on port ${
        config().servicePort
      }`,
    ),
  );
}
bootstrap();
