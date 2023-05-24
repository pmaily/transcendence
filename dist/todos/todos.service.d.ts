import { Todo } from './interfaces/todos.interfaces';
import { CreateTodoDto } from './dto/create-todo.dto';
export declare class TodosService {
    todos: Todo[];
    finAll(): Todo[];
    create(todo: CreateTodoDto): void;
}
