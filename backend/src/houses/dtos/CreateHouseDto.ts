import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateHouseDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsArray()
  preview_images: string[];

  @IsArray()
  project_images: string[];

  @IsNumber()
  floor_count: number;

  @IsNumber()
  building_footprint: number;

  @IsNumber()
  house_height: number;

  @IsNumber()
  general_square: number;

  @IsNumber()
  living_square: number;
}
