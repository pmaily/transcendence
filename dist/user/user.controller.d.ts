import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findById(id: number): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
