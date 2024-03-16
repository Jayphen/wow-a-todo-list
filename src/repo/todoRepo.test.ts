import { describe, it, expect } from "vitest";
import { TodoRepo } from "./todoRepo";

describe("TodoRepo", () => {
  it("exists", () => {
    const todoRepo = new TodoRepo();

    expect(todoRepo).toBeDefined();
  });

  it("adds a todo item", async () => {
    const todoRepo = new TodoRepo();

    todoRepo.addTodo({
      title: "get milk",
    });

    expect(await todoRepo.getAllTodos()).toEqual(
      expect.arrayContaining([expect.objectContaining({ title: "get milk" })]),
    );
  });

  it("deletes a todo item", async () => {
    const todoRepo = new TodoRepo();

    expect((await todoRepo.getAllTodos()).length).toBe(0);

    const addedItem = await todoRepo.addTodo({
      title: "get milk",
    });

    expect((await todoRepo.getAllTodos()).length).toBe(1);

    await todoRepo.deleteTodo(addedItem.id);

    expect((await todoRepo.getAllTodos()).length).toBe(0);
  });

  it("updateTodo", async () => {
    const todoRepo = new TodoRepo();

    const addedItem = await todoRepo.addTodo({
      title: "get milk",
    });

    await todoRepo.updateTodo({ ...addedItem, title: "buy vegemite" });

    expect(await todoRepo.getAllTodos()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: "buy vegemite" }),
      ]),
    );
  });
});
