import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './orders.schema';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dtos/CreateOrderDto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<OrderDocument> {
    return this.orderModel.create(createOrderDto);
  }
}
