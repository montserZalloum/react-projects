import * as mongoose from "mongoose";

export class GamesDto {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const GamesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: false },
    quantity: { type: Number, required: false },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export class GamesObj {
  name: string;
  price: number;
  quantity: number;
}

export interface Games extends mongoose.Document {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
