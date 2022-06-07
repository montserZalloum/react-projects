import { Injectable } from "@nestjs/common";
import { UserService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getUserByName(username);

    // if (user && user.password == password) {
    if (user) {
      return user;
    }

    return null;
  }
}
