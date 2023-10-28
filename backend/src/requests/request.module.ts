import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestSchema } from './request.schema';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Request.name, schema: RequestSchema }]),
  ],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}
