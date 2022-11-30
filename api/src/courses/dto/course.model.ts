import * as mongoose from "mongoose";

export class CourseDto {
    id: string;
    name: string;
    description: string;
}


export const CourseSchema = new mongoose.Schema({
    name: {type: String,required: true},
    description: {type: String,required: false}
},{ timestamps: { createdAt: 'created_at',updatedAt: 'updated_at' } });

export class CourseObj {
    name: string;
    description: string;
}

export interface Course extends mongoose.Document {
    id: string;
    name: string;
    description: string;
}
