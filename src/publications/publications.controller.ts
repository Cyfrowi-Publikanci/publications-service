import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import {
  GetAllPublicationsResponse,
  PublicationsServiceController,
} from 'types/publications';
import { PublicationsService } from './publications.service';

@Controller()
export class PublicationsController implements PublicationsServiceController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @GrpcMethod('PublicationsService', 'getAllPublications')
  async getAllPublications(): Promise<GetAllPublicationsResponse> {
    const response = await this.publicationsService.getAllUsers();

    return {
      publication: response,
    };
  }
}
