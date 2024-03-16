import "./style.css";
import { createTodo } from "./use-cases/createTodo";
import { getTodos } from "./use-cases/getTodos";
import { elt } from "./utils/elt";

const todoInput: HTMLInputElement | null = document.querySelector("#new-todo");
const todoForm: HTMLFormElement | null = document.querySelector(
  "#todo-creation-form",
);
const appRoot: HTMLDivElement | null = document.querySelector("#app");

await render();

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
    await render();
  }
});

async function render() {
  const result = await getTodos.execute();
  appRoot!.innerHTML = "";

  for (const todo of result) {
    const todoEl = elt("li", { id: todo.id }, [todo.title]);
    todoEl.dataset.completed = todo.completed.toString();
    appRoot!.prepend(todoEl);
  }
}
