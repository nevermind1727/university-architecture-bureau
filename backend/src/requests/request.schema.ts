import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RequestDocument = HydratedDocument<Request>;

@Schema()
export class Request {
  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  square: number;

  @Prop()
  floor_count: string;

  @Prop()
  comment: string;
}

export const RequestSchema = SchemaFactory.createForClass(Request);
