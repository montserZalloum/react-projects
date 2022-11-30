import { Injectable, NotFoundException } from "@nestjs/common";
import { Order } from "./dto/orders.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class OrderService {
  constructor(@InjectModel("Order") private readonly orderModel: Model<Order>) {}

  async insertOrder(payload) {
    const newOrder = new this.orderModel(payload);
    const result = await newOrder.save();
    return result;
  }

  async getAllOrders(params) {
    const orders = await this.orderModel.find(params.filter ? params.filter : {}).sort("-created_at").exec();
    return orders as Order[];
  }

  async getOrder(id: string) {
    const order = await this.findProduct(id);
    return order;
  }

  async updateOrder(id, payload) {
    const updatedOrder = await this.findProduct(id);

    if (payload.name) updatedOrder.name = payload.name;
    if (payload.price) updatedOrder.price = +payload.price;
    if (payload.image) updatedOrder.image = payload.image;
    if (payload.from) updatedOrder.from = payload.from;
    if (payload.to) updatedOrder.to = payload.to;
    
    updatedOrder.save();
  }

  async removeOrder(id) {
    const result = await this.orderModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount == 0)
      throw new NotFoundException("Failed to delete order");
  }

  async getOrderByName(name) {
    const order = await this.orderModel.find({ name: name }).exec();
    if (order.length == 0) throw new NotFoundException("Could not find Order.");
    return order[0];
  }

  private async findProduct(id: string): Promise<Order> {
    let order;
    try {
      order = await this.orderModel.findById(id);
    } catch (error) {
      throw new NotFoundException("Could not find Order.");
    }
    if (!order) {
      throw new NotFoundException("Could not find Order.");
    }
    return order;
  }

  // async findOne(ordername: string): Promise<Order | undefined> {
  //     return order.find(order => order.ordername == ordername)
  // }
}
