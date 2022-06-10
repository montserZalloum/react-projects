import { UserService } from './../users/users.service';
import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    serializeUser(user: any,done: (err: Error,user:any) => void):any {
        done(null,user)
    }
    deserializeUser(payload: any,done: (err: Error,user:any) => void):any {
        // const user = this.UsersService.findOne(payload.name)
        done(null,payload)
    }
}