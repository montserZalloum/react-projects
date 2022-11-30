import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { CourseObj } from "./dto/course.model";
import { CourseService } from "./course.service";

@Controller("course")
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async addCourse(@Body() body: CourseObj) {
    const newCourse = await this.courseService.insertCourse(body);
    return newCourse;
  }

  @Get()
  async getAllCourses() {
    return await this.courseService.getAllCourses();
  }

  @Get(":id")
  async getCourse(@Param("id") id: string) {
    return await this.courseService.getCourse(id);
  }

  @Patch(":id")
  async updateCourse(@Param("id") id: string, @Body() body: CourseObj) {    
    await this.courseService.updateCourse(id,body)
    return null
  }

  @Delete(":id")
  async removeCourse(@Param("id") id: string) {
    await this.courseService.removeCourse(id)
    return null
  }
}
