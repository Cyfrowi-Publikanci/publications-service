import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { config } from 'config/configuration';
import { PublicationsModule } from './publications/publications.module';

@Module({
  imports: [
    PublicationsModule,
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
})
export class AppModule {}
