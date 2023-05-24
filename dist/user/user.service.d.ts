import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/user.dto';
export declare class UserService {
    private userTable;
    constructor(userTable: Repository<User>);
    findById(id: number): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
}
