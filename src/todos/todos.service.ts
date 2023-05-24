import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todos.interfaces';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
    todos: Todo[] = [
        {
            id: 1,
            title: 'test',
            description: 'CREATE TEST',
            done: false
        },

        {
            id: 2,
            title: 'pd',
            description: 'CREATE PD',
            done: true
        },

        {
            id: 3,
            title: 'wine',
            description: 'CREATE WINE',
            done: true
        },
    ];

    finAll(): Todo[] {
        return this.todos;
    }

    create(todo: CreateTodoDto) {
        this.todos = [...this.todos, todo]; 
    }
}
