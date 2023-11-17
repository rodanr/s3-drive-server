import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { S3Service } from './aws/s3/s3.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly s3Service: S3Service,
  ) {}

  @Get('/health')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Get('/upload-presigned-url')
  getUploadPresignedURL() {
    return this.s3Service.getUploadPresignedURL();
  }
}
