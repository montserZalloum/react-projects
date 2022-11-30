import { Injectable, NotFoundException } from "@nestjs/common";
import { Bike } from "./dto/bikes.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class BikeService {
  constructor(@InjectModel("Bike") private readonly bikeModel: Model<Bike>) {}

  async insertBike(payload) {
    const newBike = new this.bikeModel(payload);
    const result = await newBike.save();
    return result;
  }

  async getAllBikes(params) {
    console.log(params.filter)
    const bikes = await this.bikeModel.find(params.filter ? params.filter : {}).sort("-created_at").exec();
    return bikes as Bike[];
  }

  async getBike(id: string) {
    const bike = await this.findProduct(id);
    return bike;
  }

  async updateBike(id, payload) {
    const updatedBike = await this.findProduct(id);

    if (payload.name) updatedBike.name = payload.name;
    if (payload.price) updatedBike.price = +payload.price;
    if (payload.quantity) updatedBike.quantity = +payload.quantity;
    if (payload.description) updatedBike.description = payload.description;
    if (payload.image) updatedBike.image = payload.image;
    
    updatedBike.save();
  }

  async removeBike(id) {
    const result = await this.bikeModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount == 0)
      throw new NotFoundException("Failed to delete bike");
  }

  async getBikeByName(name) {
    const bike = await this.bikeModel.find({ name: name }).exec();
    if (bike.length == 0) throw new NotFoundException("Could not find Bike.");
    return bike[0];
  }

  private async findProduct(id: string): Promise<Bike> {
    let bike;
    try {
      bike = await this.bikeModel.findById(id);
    } catch (error) {
      throw new NotFoundException("Could not find Bike.");
    }
    if (!bike) {
      throw new NotFoundException("Could not find Bike.");
    }
    return bike;
  }

  // async findOne(bikename: string): Promise<Bike | undefined> {
  //     return bike.find(bike => bike.bikename == bikename)
  // }
}
