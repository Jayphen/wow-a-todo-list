import { TodoItem } from "../models/Todo";
import { getTodos } from "../use-cases/getTodos";

export const appRoot: HTMLDivElement | null = document.querySelector("#app");

export async function render(renderer: (todo: TodoItem) => void) {
  const result = await getTodos.execute();
  appRoot!.innerHTML = "";

  for (const todo of result) {
    renderer(todo);
  }
}
