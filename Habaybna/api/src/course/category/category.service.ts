import { Injectable, NotFoundException } from "@nestjs/common";
import { Category } from "../dto/category.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class CategoryService {

  constructor(
    @InjectModel("Category") private readonly categoryModel: Model<Category>
  ) {}

  async insertCategory(payload) {
    const newCategory = new this.categoryModel(payload);
    const result = await newCategory.save();
    return result;
  }

  async getAllCategorys() {
    const categorys = await this.categoryModel.find().sort('-created_date').exec();
    return categorys as Category[];
  }

  async getCategory(id: string) {
    const category = await this.findProduct(id);
    return category;
  }

  async updateCategory(id, payload) {
    const updatedCategory = await this.findProduct(id);

    if (payload.title) updatedCategory.title = payload.title;
    if (payload.isPublished) updatedCategory.isPublished = payload.isPublished;

    updatedCategory.save();
  }

  async removeCategory(id) {
    const result = await this.categoryModel.deleteOne({_id:id}).exec()
    if (result.deletedCount == 0) 
      throw new NotFoundException('Failed to delete category');
    
  }

  private async findProduct(id: string): Promise<Category> {
    let category;
    try {
      category = await this.categoryModel.findById(id);
    } catch (error) {
      throw new NotFoundException("Could not find category.");
    }
    if (!category) {
      throw new NotFoundException("Could not find category.");
    }
    return category;
  }
}
