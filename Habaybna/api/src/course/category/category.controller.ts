import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { CategoryObj } from "../dto/category.model";
import { CategoryService } from "./category.service";

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async addCategory(@Body() body: CategoryObj) {
    console.log(body)
    const newCategory = await this.categoryService.insertCategory(body);
    return newCategory;
  }

  @Get()
  async getAllCategorys() {
    return await this.categoryService.getAllCategorys();
  }

  @Get(":id")
  async getCategory(@Param("id") id: string) {
    return await this.categoryService.getCategory(id);
  }

  @Patch(":id")
  async updateCategory(@Param("id") id: string, @Body() body: CategoryObj) {    
    await this.categoryService.updateCategory(id,body)
    return null
  }

  @Delete(":id")
  async removeCategory(@Param("id") id: string) {
    await this.categoryService.removeCategory(id)
    return null
  }
}
