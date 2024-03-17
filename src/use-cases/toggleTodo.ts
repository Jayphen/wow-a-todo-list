import { ITodoRepo, todoRepo } from "../repo/todoRepo";
import { emitter } from "../utils/emit";

export class ToggleTodo {
  constructor(private todoRepository: ITodoRepo) {}

  async execute(id: number, state: "complete" | "incomplete") {
    if (state === "complete") {
      await this.todoRepository.completeTodo(id);
    } else {
      await this.todoRepository.uncompleteTodo(id);
    }

    emitter.emit("render");
  }
}

export const toggleTodo = new ToggleTodo(todoRepo);
