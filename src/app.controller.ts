import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Get('/upload-presigned-url')
  getUploadPresignedURL() {
    return this.appService.getUploadPresignedURL();
  }

  @Get(`/uploaded-objects`)
  getUploadedObjects() {
    return this.appService.getUploadedObjects();
  }

  @Get(`/uploaded-objects/:key`) // returns presigne url to get temporary access to the resource
  getUploadedObjectFileAccess(@Param('key') key: string) {
    return this.appService.getUploadedObjectFile(key);
  }
}
