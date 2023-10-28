import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HouseDocument = HydratedDocument<House>;

@Schema()
export class House {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  preview_images: string[];

  @Prop()
  project_images: string[];

  @Prop()
  floor_count: number;

  @Prop()
  building_footprint: number;

  @Prop()
  house_height: number;

  @Prop()
  general_square: number;

  @Prop()
  living_square: number;
}

export const HouseSchema = SchemaFactory.createForClass(House);
