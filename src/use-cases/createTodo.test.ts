import { describe, it, expect } from "vitest";
import { CreateTodo } from "./createTodo";
import { TodoRepo } from "../repo/todoRepo";

describe("CreateTodo use case", () => {
  it("exists", () => {
    // we will use the TodoRepo as it only stores todos in memory for now,
    // but the advantage of inverting the dependency is that we can easily mock it in tests once we are using a real db
    const createTodo = new CreateTodo(new TodoRepo());

    expect(createTodo).toBeDefined();
  });

  it("allows us to create a todo", async () => {
    const createTodo = new CreateTodo(new TodoRepo());

    const todo = await createTodo.execute({ title: "test" });

    expect(todo).toEqual(expect.objectContaining({ title: "test" }));
    expect(todo.id).toBeDefined();
    expect(todo.completed).toBeFalsy();
  });
});
