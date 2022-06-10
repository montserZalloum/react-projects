import { imageFileFilter } from './../utils/file-uploading.utils';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseInterceptors,
  UploadedFile,
  Inject,
} from "@nestjs/common";
import { CourseObj } from "./dto/course.model";
import { CourseService } from "./course.service";
import { UploadsController } from "src/uploads/uploads.controller";
import { editFileName } from 'src/utils/file-uploading.utils';

// const UploadsController = require("../uploads/uploads.controller");

@Controller("course")
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  
  @Inject(UploadsController)
  private readonly uploadService: any;

  @Post()
  @UseInterceptors(
    FileInterceptor("coverImage", {
      storage: diskStorage({
        destination: "./files",
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  async addCourse(@Body() body: CourseObj, @UploadedFile() file) {
    // const coverImage = await this.uploadService.uploadFile(file);
    const imgResponse = {
      originalname: file.originalname,
      filename: file.filename,
    };
    
    body.coverImage = imgResponse.filename;
    console.log(body,"add request");
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
    await this.courseService.updateCourse(id, body);
    return null;
  }

  @Delete(":id")
  async removeCourse(@Param("id") id: string) {
    await this.courseService.removeCourse(id);
    return null;
  }
}
