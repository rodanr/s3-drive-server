import { Injectable } from '@nestjs/common';
import { S3Service } from './aws/s3/s3.service';
import {
  UploadedObjectsListItem,
  UploadedObjectsListResponse,
} from './app.dto';
import { getDisplaySizeFromBytes } from './utils';

@Injectable()
export class AppService {
  constructor(private readonly s3Service: S3Service) {}
  getHealth(): string {
    return '🍺 Server running fine !';
  }
  getUploadPresignedURL() {
    return this.s3Service.getUploadPresignedURL();
  }
  async getUploadedObjects() {
    const { Contents: contents } = await this.s3Service.getObjectsList();

    const uploadedObjects: UploadedObjectsListResponse =
      contents?.map(
        ({ Key, Size }): UploadedObjectsListItem => ({
          fileName: 'fileNameDummy',
          displaySize: getDisplaySizeFromBytes(Size),
          sizeInBytes: Size,
          key: Key,
        }),
      ) || [];

    return uploadedObjects;
  }

  async getUploadedObjectFile(key: string) {
    return this.s3Service.getDownloadPresignedURL(key);
  }
}
