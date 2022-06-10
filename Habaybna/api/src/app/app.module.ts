import { Module } from "@nestjs/common";
import { TaxonomyModule } from "../taxonomy/taxonomy.module";
import { HomeModule } from "../home/home.module";
import { MongooseModule } from "@nestjs/mongoose";
import { TermModule } from "src/taxonomy/term/term.module";
import { ContentModule } from "src/content/content.module";
// import { AuthModule } from "src/auth/auth.module";
import { UsersModule } from "src/users/users.module";
import { CourseModule } from "src/course/course.module";
import { CategoryModule } from "src/course/category/category.module";
import { MulterModule } from "@nestjs/platform-express";
import { UploadsController } from "src/uploads/uploads.controller";

@Module({
  imports: [
    // AuthModule,
    TaxonomyModule,
    TermModule,
    HomeModule,
    ContentModule,
    UsersModule,
    CourseModule,
    CategoryModule,
    MongooseModule.forRoot("mongodb://localhost:27017/habaybna"),
    MulterModule.register({
      dest: './uploads',
    })
  ],
  controllers: [
    UploadsController
  ],
  providers: [],
})
export class AppModule {
  
}
