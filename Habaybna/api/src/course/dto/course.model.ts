import * as mongoose from "mongoose";

export class CourseDto {
  id: string;
  courseTitle: string;
  courseDescription: string;
  whatShouldLearn: string;
  coverImage: string;
  introLink: string;
  isFree: boolean;
  price: number;
  discount: number;
  isPublished: boolean;
  categories: [
    {
      type: String;
    }
  ];
  specialists: [
    {
      type: String;
    }
  ];
}

export const CourseSchema = new mongoose.Schema(
  {
    courseTitle: { type: String, required: true },
    courseDescription: { type: String, required: false },
    whatShouldLearn: { type: String, required: false },
    coverImage: { type: String, required: false },
    introLink: { type: String, required: false },
    isFree: { type: Boolean, required: false },
    isPublished: { type: Boolean, required: false },
    price: { type: Number, required: false },
    discount: { type: Number, required: false },
    categories: { type: [], required: false },
    specialists: { type: [], required: false },
  },
  { timestamps: { createdAt: "created_date", updatedAt: "updated_date" } }
);

export class CourseObj {
  courseTitle: string;
  courseDescription: string;
  whatShouldLearn: string;
  coverImage: string;
  introLink: string;
  isFree: boolean;
  price: number;
  discount: number;
  isPublished: boolean;
  categories: [
    {
      type: String;
    }
  ];
  specialists: [
    {
      type: String;
    }
  ];
}

export interface Course extends mongoose.Document {
  id: string;
  courseTitle: string;
  courseDescription: string;
  whatShouldLearn: string;
  coverImage: string;
  introLink: string;
  isFree: boolean;
  price: number;
  discount: number;
  isPublished: boolean;
  categories: [
    {
      type: String;
    }
  ];
  specialists: [
    {
      type: String;
    }
  ];
}
