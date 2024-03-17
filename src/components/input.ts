import { createTodo } from "../use-cases/createTodo";
import { getTodos } from "../use-cases/getTodos";
import { emitter } from "../utils/emit";

const todoInput: HTMLInputElement | null = document.querySelector("#new-todo");
const todoForm: HTMLFormElement | null = document.querySelector(
  "#todo-creation-form",
);

export function bindSubmit() {
  todoForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(todoForm);

    if (formData.get("todo")) {
      await createTodo.execute({
        title: formData.get("todo")!.toString(),
      });
      // assuming there are no errors
      // we could use Either to check, but that is for a more complete example
      todoInput!.value = "";
      await getTodos.execute();
      emitter.emit("render");
    }
  });
}
