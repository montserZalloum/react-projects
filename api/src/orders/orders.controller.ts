import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from "@nestjs/common";
import { OrderObj } from "./dto/orders.model";
import { OrderService } from "./orders.service";

@Controller("order")
export class OrdersController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async addOrder(@Body() body: OrderObj) {
    const newOrder = await this.orderService.insertOrder(body);
    return newOrder;
  }

  @Get()
  async getAllOrders(@Query() query) {
    const filter:any = {}
    if (query.userID) 
      filter.userID = query.userID
    
    return await this.orderService.getAllOrders(filter);
  }

  @Get(":id")
  async getOrder(@Param("id") id: string) {
    return await this.orderService.getOrder(id);
  }

  @Get("/name/:name")
  async getOrderByName(@Param("name") name: string) {
    return await this.orderService.getOrderByName(name);
  }

  @Patch(":id")
  async updateOrder(@Param("id") id: string, @Body() body: OrderObj) {    
    await this.orderService.updateOrder(id,body)
    return null
  }

  @Delete(":id")
  async removeOrder(@Param("id") id: string) {
    await this.orderService.removeOrder(id)
    return null
  }
}
