import * as mongoose from "mongoose";

export class UserDto {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  mobileNumber: string;
  password: string;
  email: string;
  gender: string;
  type: string;
  isPublished: boolean;
  // specialists , others
  specialization: string;
  // parents
  relativeRelation: string;
}

export const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    avatar: { type: String, required: false },
    mobileNumber: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
    specialization: { type: String, required: false },
    relativeRelation: { type: String, required: false },
    gender: { type: String, required: false },
    isPublished: { type: Boolean, required: false, default: true },
    type: { type: String, required: true },

  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export class UserObj {
  firstName: string;
  lastName: string;
  avatar: string;
  mobileNumber: string;
  password: string;
  email: string;
  gender: string;
  type: string;
  isPublished: boolean;
  // specialists , others
  specialization: string;
  // parents
  relativeRelation: string;
}

export interface User extends mongoose.Document {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  mobileNumber: string;
  password: string;
  email: string;
  gender: string;
  type: string;
  isPublished: boolean;
  // specialists , others
  specialization: string;
  // parents
  relativeRelation: string;
}
