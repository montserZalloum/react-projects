import * as mongoose from "mongoose";

export class UserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  status: Boolean;
  roles: [
    {
      type: String;
    }
  ];
  image: string;
  title: string;
  bio: string;
  classification: string;
  domainAccess: [
    {
      type: String;
    }
  ];
}

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: false },
    status: { type: Boolean, required: false },

    roles: {
      type: [
        {
          type: String,
        },
      ],
      required: false,
    },

    image: { type: String, required: false },
    title: { type: String, required: false },
    bio: { type: String, required: false },
    classification: { type: String, required: false },
    domainAccess: {
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

export class UserObj {
    name: string;
    email: string;
    password: string;
    status: Boolean;
    roles: [
      {
        type: String;
      }
    ];
    image: string;
    title: string;
    bio: string;
    classification: string;
    domainAccess: [
      {
        type: String;
      }
    ];
}

export interface User extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  password: string;
  status: Boolean;
  roles: [
    {
      type: String;
    }
  ];
  image: string;
  title: string;
  bio: string;
  classification: string;
  domainAccess: [
    {
      type: String;
    }
  ];
}
