import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: TodosService);
    findAll(): any[];
    test(id: string): string;
    createTodo(newTodo: CreateTodoDto): void;
}
