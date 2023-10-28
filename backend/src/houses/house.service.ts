import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { House, HouseDocument } from './house.schema';
import { CreateHouseDto } from './dtos/CreateHouseDto';

@Injectable()
export class HouseService {
  constructor(@InjectModel(House.name) private houseModel: Model<House>) {}

  async createHouse(createHouseDto: CreateHouseDto): Promise<HouseDocument> {
    return this.houseModel.create(createHouseDto);
  }

  async getAllHouses(): Promise<HouseDocument[]> {
    return this.houseModel.find().exec();
  }

  async getHouseById(house_id: string): Promise<HouseDocument> {
    return this.houseModel.findById(house_id);
  }
}
