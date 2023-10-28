import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HouseService } from './house.service';
import { CreateHouseDto } from './dtos/CreateHouseDto';
import { HouseDocument } from './house.schema';

@Controller('houses')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post('/create')
  async createHouse(
    @Body() createHouseDto: CreateHouseDto,
  ): Promise<HouseDocument> {
    return this.houseService.createHouse(createHouseDto);
  }

  @Get('/')
  async getAllHouses(): Promise<HouseDocument[]> {
    return this.houseService.getAllHouses();
  }

  @Get(':id')
  async getHouseById(@Param() params: any): Promise<HouseDocument> {
    return this.houseService.getHouseById(params.id);
  }
}
