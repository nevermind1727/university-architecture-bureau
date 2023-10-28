import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, RequestDocument } from './request.schema';
import { CreateRequestDto } from './dtos/CreateRequestDto';

@Injectable()
export class RequestService {
  constructor(
    @InjectModel(Request.name) private requestModel: Model<Request>,
  ) {}

  async createRequest(
    createRequestDto: CreateRequestDto,
  ): Promise<RequestDocument> {
    const newRequest = await this.requestModel.create(createRequestDto);
    return newRequest;
  }
}
