import { Injectable, NotFoundException } from "@nestjs/common";
import { Course } from "./dto/course.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class CourseService {

  constructor(
    @InjectModel("Course") private readonly courseModel: Model<Course>
  ) {}

  async insertCourse(payload) {
    const newCourse = new this.courseModel(payload);
    const result = await newCourse.save();
    return result;
  }

  async getAllCourses() {
    const courses = await this.courseModel.find().sort('-created_at').exec();
    return courses as Course[];
  }

  async getCourse(id: string) {
    const course = await this.findProduct(id);
    return course;
  }

  async updateCourse(id, payload) {
    const updatedCourse = await this.findProduct(id);

    if (payload.name) updatedCourse.name = payload.name;

    if (payload.description) updatedCourse.description = payload.description;
    updatedCourse.save();
  }

  async removeCourse(id) {
    const result = await this.courseModel.deleteOne({_id:id}).exec()
    if (result.deletedCount == 0) 
      throw new NotFoundException('Failed to delete course');
    
  }

  private async findProduct(id: string): Promise<Course> {
    let course;
    try {
      course = await this.courseModel.findById(id);
    } catch (error) {
      throw new NotFoundException("Could not find course.");
    }
    if (!course) {
      throw new NotFoundException("Could not find course.");
    }
    return course;
  }
}
