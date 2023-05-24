import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userTable: Repository<User>,
    ) { }

    findById(id: number): Promise<User> {
        return this.userTable.findOne({ where: { id }});
    }

    create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();

        user.id = createUserDto.id;
        user.name = createUserDto.name;
        user.email = createUserDto.email;
        return this.userTable.save(user);
    }
}
