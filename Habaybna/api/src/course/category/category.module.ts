import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { CategorySchema } from "../dto/category.model";
import { CategoryService } from './category.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Category", schema: CategorySchema }]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService]
})
export class CategoryModule {}
