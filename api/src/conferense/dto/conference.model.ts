import * as mongoose from "mongoose";

export class ConferenceDto {
  id: string;
  location: string;
  food: [{ type: string }];
  speakers: [{ type: string }];
  dateTime: string;
  users: [{ type: string }];
}

export const ConferenceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: false },
    food: { type: String, required: false },
    speakers: { type: String, required: false },
    dateTime: { type: String, required: false },
    users: {
      type: [
        {
          type: String,
        },
      ],
      required: false,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export class ConferenceObj {
  name: string;
  location: string;
  food: string;
  speakers: string;
  dateTime: string;
  users: [{ type: string }];
}

export interface Conference extends mongoose.Document {
  id: string;
  name: string;
  location: string;
  food: string;
  speakers: string;
  dateTime: string;
  users: [
    {type:string}
  ]
}
