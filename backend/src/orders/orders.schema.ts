import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { House } from 'src/houses/house.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  cash_method: boolean;
  @Prop()
  cashless_payment: boolean;
  @Prop()
  courirer_delivery: boolean;
  @Prop()
  in_office: boolean;
  @Prop()
  money_transfer: boolean;
  @Prop()
  online_payment: boolean;

  @Prop()
  comment: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'House' })
  house: House;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
