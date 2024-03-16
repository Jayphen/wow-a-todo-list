import { ITodoRepo, todoRepo } from "../repo/todoRepo";

export class GetTodos {
  constructor(private todoRepository: ITodoRepo) {}

  async execute() {
    const result = await this.todoRepository.getAllTodos();

    return result;
  }
}

export const getTodos = new GetTodos(todoRepo);
