import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { FileType } from './s3.types';
import { generateS3FileName } from 'src/utils';

@Injectable()
export class S3Service {
  private readonly s3: S3;
  private readonly bucketName: string;

  constructor(private readonly configService: ConfigService) {
    this.s3 = new S3({
      accessKeyId: this.configService.get('AWS_ACCESS_ID'),
      secretAccessKey: this.configService.get('AWS_SECRET_KEY'),
    });

    this.bucketName = this.configService.get('AWS_S3_BUCKET_NAME');
  }

  getUploadPresignedURL(): Promise<string> {
    const folderLocation = 'rodan'; // uploads categorized by username

    const params = {
      Bucket: this.bucketName,
      Key: `${folderLocation}/${generateS3FileName()}`,
      ContentType: FileType.IMAGE_PNG,
    };

    return new Promise((resolve, reject) =>
      this.s3.getSignedUrl('putObject', params, (err, url) => {
        err ? reject(err) : resolve(url);
      }),
    );
  }
}
