import { TodoItem } from "../models/Todo";
import { getTodos } from "../use-cases/getTodos";
import { toggleTodo } from "../use-cases/toggleTodo";

export const appRoot: HTMLDivElement | null = document.querySelector("#app");

export async function render(renderer: (todo: TodoItem) => void) {
  const result = await getTodos.execute();
  appRoot!.innerHTML = "";

  for (const todo of result) {
    renderer(todo);
  }
}

export function bindComplete() {
  appRoot!.addEventListener("click", async (event) => {
    event.preventDefault();

    if (event.target instanceof HTMLLIElement) {
      const id = event.target.id;
      const currentlyCompleted = event.target.dataset.completed === "true";

      await toggleTodo.execute(
        Number(id),
        currentlyCompleted ? "incomplete" : "complete",
      );
    }
  });
}
