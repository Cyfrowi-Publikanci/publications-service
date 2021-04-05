import { Injectable } from '@nestjs/common';

@Injectable()
export class PublicationsService {
  async getAllUsers(): Promise<string> {
    return 'Hello publications';
  }
}
