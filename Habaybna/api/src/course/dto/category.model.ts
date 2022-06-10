import * as mongoose from "mongoose";

export class CategoryDto {
    id: string;
    title: string;
    isPublished: boolean;
}


export const CategorySchema = new mongoose.Schema({
    title: {type: String,required: true},
    isPublished: {type: String,required: false},
},{ timestamps: { createdAt: 'created_at',updatedAt: 'updated_at' } });

export class CategoryObj {
    title: string;
    isPublished: boolean;
}

export interface Category extends mongoose.Document {
    id: string;
    title: string;
    isPublished: boolean;
}
