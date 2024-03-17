import { TodoItem } from "../models/Todo";
import { elt } from "../utils/elt";
import { appRoot } from "./list";

export function render(todo: TodoItem) {
  const todoEl = elt("li", { id: todo.id }, [todo.title]);
  todoEl.dataset.completed = todo.completed.toString();
  appRoot!.prepend(todoEl);
}
