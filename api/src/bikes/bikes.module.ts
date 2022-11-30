import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BikeSchema } from './dto/bikes.model';
import { BikesController } from './bikes.controller';
import { BikeService } from './bikes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Bike", schema: BikeSchema }]),
  ],
  controllers: [BikesController],
  providers: [BikeService],
  exports: [BikeService]
})
export class BikesModule {
  
}
