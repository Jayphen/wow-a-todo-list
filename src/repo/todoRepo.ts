import { TodoItem, TodoItemInput } from "../models/Todo";
import { TodoList } from "../models/TodoList";

export interface ITodoRepo {
  addTodo(todo: TodoItemInput): Promise<TodoItem>;
  updateTodo(todo: TodoItem): Promise<TodoItem>;
  deleteTodo(id: number): Promise<void>;
  getAllTodos(): Promise<TodoItem[]>;
  completeTodo(id: number): Promise<void>;
  uncompleteTodo(id: number): Promise<void>;
}

// we could put the state in ls
export class TodoRepo implements ITodoRepo {
  constructor(private todoList: TodoList = { todos: [] }) {}

  async addTodo(todo: TodoItemInput): Promise<TodoItem> {
    const id = this.todoList.todos.length + 1;

    const newTodo = { ...todo, completed: false, id };

    this.todoList.todos.push(newTodo);

    return newTodo;
  }

  async deleteTodo(id: number): Promise<void> {
    this.todoList.todos = this.todoList.todos.filter((todo) => todo.id !== id);
  }

  async updateTodo(todo: TodoItem): Promise<TodoItem> {
    const target = this.todoList.todos.findIndex((t) => t.id === todo.id);

    this.todoList.todos[target] = todo;

    return todo;
  }

  async getAllTodos(): Promise<TodoItem[]> {
    return this.todoList.todos;
  }

  async completeTodo(id: number): Promise<void> {
    const target = this.todoList.todos.find((t) => t.id === id);

    if (target) target.completed = true;
    // error handling
  }

  async uncompleteTodo(id: number): Promise<void> {
    const target = this.todoList.todos.find((t) => t.id === id);

    if (target) target.completed = false;
    // error handling
  }
}

export const todoRepo = new TodoRepo({
  todos: [
    {
      id: 1,
      completed: true,
      title: "test",
    },
    {
      id: 2,
      completed: false,
      title: "test",
    },
  ],
});
