import { Controller, Get, Param, Post, Body, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
  
    // @Get()
    // findAll(): Promise<User[]> {
    //   return this.userService.findAll();
    // }

    @Get(':id')
    async findById(@Param('id', new ParseIntPipe()) id: number): Promise<User> {
        const result: User = await this.userService.findById(id as number);
        return result;
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto.id);
        console.log(createUserDto.name);
        console.log(createUserDto.email);
        return this.userService.create(createUserDto);
    }
}

