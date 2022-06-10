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
    payload.categories = payload.categories.split(',');
    payload.specialists = payload.specialists.split(',');
    const newCourse = new this.courseModel(payload);
    const result = await newCourse.save();
    return result;
  }

  async getAllCourses() {
    const courses = await this.courseModel.find().sort('-created_date').exec();
    return courses as Course[];
  }

  async getCourse(id: string) {
    const course = await this.findProduct(id);
    return course;
  }

  async updateCourse(id, payload) {
    const updatedCourse = await this.findProduct(id);

    if (payload.courseTitle) updatedCourse.courseTitle = payload.courseTitle;
    if (payload.courseDescription) updatedCourse.courseDescription = payload.courseDescription;
    if (payload.whatShouldLearn) updatedCourse.whatShouldLearn = payload.whatShouldLearn;
    if (payload.coverImage) updatedCourse.coverImage = payload.coverImage;
    if (payload.introLink) updatedCourse.introLink = payload.introLink;
    if (payload.isFree) updatedCourse.isFree = payload.isFree;
    if (payload.price) updatedCourse.price = payload.price;
    if (payload.discount) updatedCourse.discount = payload.discount;
    if (payload.isPublished) updatedCourse.isPublished = payload.isPublished;
    if (payload.categories) updatedCourse.categories = payload.categories;
    if (payload.specialists) updatedCourse.specialists = payload.specialists;

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
