import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class S3Service {
  constructor(private readonly configService: ConfigService) {}

  getUploadPresignedURL(): string {
    return this.configService.get('AWS_S3_BUCKET_NAME');
  }
}
