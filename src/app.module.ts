import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { S3Module } from './aws/s3/s3.module';

@Module({
  imports: [ConfigModule.forRoot(), S3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
