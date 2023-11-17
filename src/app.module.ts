import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { S3Service } from './aws/s3/s3.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, S3Service],
})
export class AppModule {}
