import { TodoItemInput } from "../models/Todo";
import { ITodoRepo, todoRepo } from "../repo/todoRepo";

export class CreateTodo {
  constructor(private todoRepository: ITodoRepo) {}

  async execute(todo: TodoItemInput) {
    const result = await this.todoRepository.addTodo(todo);

    return result;
  }
}

export const createTodo = new CreateTodo(todoRepo);
