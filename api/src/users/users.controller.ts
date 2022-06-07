import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { UserObj } from "./dto/users.model";
import { UserService } from "./users.service";

@Controller("user")
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(@Body() body: UserObj) {
    console.log(body)
    const newUser = await this.userService.insertUser(body);
    return newUser;
  }

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Get(":id")
  async getUser(@Param("id") id: string) {
    return await this.userService.getUser(id);
  }

  @Get("/name/:name")
  async getUserByName(@Param("name") name: string) {
    return await this.userService.getUserByName(name);
  }

  @Patch(":id")
  async updateUser(@Param("id") id: string, @Body() body: UserObj) {    
    await this.userService.updateUser(id,body)
    return null
  }

  @Delete(":id")
  async removeUser(@Param("id") id: string) {
    await this.userService.removeUser(id)
    return null
  }
}
