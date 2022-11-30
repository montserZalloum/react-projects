import { Module } from "@nestjs/common";
import { CourseController } from "./course.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { CourseSchema } from "./dto/course.model";
import { CourseService } from './course.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Course", schema: CourseSchema }]),
  ],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService]
})
export class CourseModule {}
