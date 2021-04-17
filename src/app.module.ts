import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { PublicationsModule } from './publications/publications.module';
import { ConfigModule } from '@app/config/config.module';

@Module({
  imports: [
    PublicationsModule,
    NestConfigModule.forRoot({
      isGlobal: true
    }),
    ConfigModule
  ],
})
export class AppModule {}
