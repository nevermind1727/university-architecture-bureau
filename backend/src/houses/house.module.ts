import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { House, HouseSchema } from './house.schema';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: House.name, schema: HouseSchema }]),
  ],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
