import { Injectable } from '@nestjs/common';

@Injectable()
export class S3Service {
  getUploadPresignedURL(): string {
    return process.env?.AWS_S3_BUCKET_NAM;
  }
}
