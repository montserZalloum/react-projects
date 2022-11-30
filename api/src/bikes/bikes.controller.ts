import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from "@nestjs/common";
import { BikeObj } from "./dto/bikes.model";
import { BikeService } from "./bikes.service";

@Controller("bike")
export class BikesController {
  constructor(private readonly bikeService: BikeService) {}

  @Post()
  async addBike(@Body() body: BikeObj) {
    const newBike = await this.bikeService.insertBike(body);
    return newBike;
  }

  @Get()
  async getAllBikes(@Query() query) {
    const filter:any = {}
    if (query.price) 
      filter.price = {$gte: +query.price}
    if (query.name) 
      filter.name = {'$regex' : query.name, '$options' : 'i'}
    
    return await this.bikeService.getAllBikes({filter});
  }

  @Get(":id")
  async getBike(@Param("id") id: string) {
    return await this.bikeService.getBike(id);
  }

  @Get("/name/:name")
  async getBikeByName(@Param("name") name: string) {
    return await this.bikeService.getBikeByName(name);
  }

  @Patch(":id")
  async updateBike(@Param("id") id: string, @Body() body: BikeObj) {    
    await this.bikeService.updateBike(id,body)
    return null
  }

  @Delete(":id")
  async removeBike(@Param("id") id: string) {
    await this.bikeService.removeBike(id)
    return null
  }
}
