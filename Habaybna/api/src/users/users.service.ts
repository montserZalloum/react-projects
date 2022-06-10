import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./dto/users.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>) {}

  async insertUser(payload) {
    const newUser = new this.userModel(payload);
    const result = await newUser.save();
    return result;
  }

  async getAllUsers() {
    const users = await this.userModel.find().sort("-created_at").exec();
    return users as User[];
  }

  async getUser(id: string) {
    const user = await this.findProduct(id);
    if (!user) throw new NotFoundException("Could not find User.");
    return user;
  }
  async getUsersByType(type: string) {
    const users = await this.userModel.find({ type }).exec();
    // if (users.length == 0) throw new NotFoundException("Could not find User.");
    return users;
  }

  async updateUser(id, payload) {
    const updatedUser = await this.findProduct(id);

    if (payload.firstName) updatedUser.firstName = payload.firstName;
    if (payload.lastName) updatedUser.lastName = payload.lastName;
    if (payload.avatar) updatedUser.avatar = payload.avatar;
    if (payload.mobileNumber) updatedUser.mobileNumber = payload.mobileNumber;
    if (payload.password) updatedUser.password = payload.password;
    if (payload.email) updatedUser.email = payload.email;
    if (payload.gender) updatedUser.gender = payload.gender;
    if (payload.type) updatedUser.type = payload.type;
    if (payload.isPublished) updatedUser.isPublished = payload.isPublished;
    if (payload.specialization) updatedUser.specialization = payload.specialization;
    if (payload.relativeRelation) updatedUser.relativeRelation = payload.relativeRelation;
      
    updatedUser.save();
  }

  async removeUser(id) {
    const result = await this.userModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount == 0)
      throw new NotFoundException("Failed to delete user");
  }

  async getUserByName(name) {
    const user = await this.userModel.find({ name: name }).exec();
    if (user.length == 0) throw new NotFoundException("Could not find User.");
    return user[0];
  }

  private async findProduct(id: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findById(id);
    } catch (error) {
      throw new NotFoundException("Could not find User.");
    }
    if (!user) {
      throw new NotFoundException("Could not find User.");
    }
    return user;
  }

  // async findOne(username: string): Promise<User | undefined> {
  //     return user.find(user => user.username == username)
  // }
}
