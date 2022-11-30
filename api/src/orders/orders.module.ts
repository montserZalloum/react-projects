import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './dto/orders.model';
import { OrdersController } from './orders.controller';
import { OrderService } from './orders.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Order", schema: OrderSchema }]),
  ],
  controllers: [OrdersController],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrdersModule {
  
}
