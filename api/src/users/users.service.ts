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
    return user;
  }

  async updateUser(id, payload) {
    const updatedUser = await this.findProduct(id);

    if (payload.name) updatedUser.name = payload.name;
    if (payload.email) updatedUser.email = payload.email;
    if (payload.password) updatedUser.password = payload.password;
    if (payload.status) updatedUser.status = payload.status;
    if (payload.roles) updatedUser.roles = payload.roles;
    if (payload.image) updatedUser.image = payload.image;
    if (payload.title) updatedUser.title = payload.title;
    if (payload.bio) updatedUser.bio = payload.bio;
    if (payload.classification)
      updatedUser.classification = payload.classification;
    if (payload.domainAccess) updatedUser.domainAccess = payload.domainAccess;
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

  async loginUser(obj){
    const user = await this.userModel.find({ email:obj.email, password: obj.password }).exec();
    if (user.length == 0) throw new NotFoundException("Could not find User.");
    return user[0];
  }
}
