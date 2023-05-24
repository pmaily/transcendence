import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todos.interfaces';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService) {}

    @Get()
    findAll(): any[] {
        return this.todoService.finAll();
    }

    @Get(':id')
    test(@Param('id') id: string): string {
        if (id == '1')
            return 'salut';
        return 'pd';
    }

    @Post()
    createTodo(@Body() newTodo: CreateTodoDto){
        console.log(newTodo.id);
        return this.todoService.create(newTodo);
    }
}
