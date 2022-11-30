import * as mongoose from "mongoose";

export class BikeDto {
  id: string;
  name: string;
  price: Number;
  quantity: Number;
  image: string;
  description: string;
}

export const BikeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: false },
    quantity: { type: Number, required: false },
    image: { type: String, required: false },
    description: { type: String, required: false },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export class BikeObj {
  name: string;
  price: Number;
  quantity: Number;
  image: string;
  description: string;
}

export interface Bike extends mongoose.Document {
  id: string;
  name: string;
  price: Number;
  quantity: Number;
  image: string;
  description: string;
}
