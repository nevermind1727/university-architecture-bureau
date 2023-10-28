import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDocument } from './orders.schema';
import { CreateOrderDto } from './dtos/CreateOrderDto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('/')
  async createOrder(
    @Body() createOrderDto: CreateOrderDto,
  ): Promise<OrderDocument> {
    return this.ordersService.createOrder(createOrderDto);
  }
}
