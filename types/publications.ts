/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Observable } from 'rxjs';
import { Metadata } from 'grpc';

export const protobufPackage = 'authentication';

export interface EmptyPayload {}

export interface GetAllPublicationsResponse {
  publication: string;
}

export const AUTHENTICATION_PACKAGE_NAME = 'authentication';

export interface PublicationsServiceClient {
  getAllPublications(
    request: EmptyPayload,
    metadata?: Metadata,
  ): Observable<GetAllPublicationsResponse>;
}

export interface PublicationsServiceController {
  getAllPublications(
    request: EmptyPayload,
    metadata?: Metadata,
  ):
    | Promise<GetAllPublicationsResponse>
    | Observable<GetAllPublicationsResponse>
    | GetAllPublicationsResponse;
}

export function PublicationsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getAllPublications'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('PublicationsService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('PublicationsService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const PUBLICATIONS_SERVICE_NAME = 'PublicationsService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
