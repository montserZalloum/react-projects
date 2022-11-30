import * as mongoose from "mongoose";

export class OrderDto {
  id: string;
  userID: string;
  bikeID: string;
  price: Number;
  username: string;
  name: string;
  image: string;
  from: Date;
  to: Date;
}

export const OrderSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    bikeID: { type: String, required: true },
    username: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: false },
    image: { type: String, required: false },
    from: { type: Date, required: false },
    to: { type: Date, required: false },
    
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export class OrderObj {
  userID: string;
  bikeID: string;
  price: Number;
  username: string;
  name: string;
  image: string;
  from: Date;
  to: Date;
}

export interface Order extends mongoose.Document {
  id: string;
  userID: string;
  bikeID: string;
  price: Number;
  username: string;
  name: string;
  image: string;
  from: Date;
  to: Date;
}
