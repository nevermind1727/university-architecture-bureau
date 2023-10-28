import { Body, Controller, Post } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dtos/CreateRequestDto';
import { RequestDocument } from './request.schema';

@Controller('requests')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  async createRequest(
    @Body() createRequestDto: CreateRequestDto,
  ): Promise<RequestDocument> {
    return this.requestService.createRequest(createRequestDto);
  }
}
