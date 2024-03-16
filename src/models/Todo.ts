export interface TodoItem extends TodoItemInput {
  id: number;
  completed: boolean;
}

export interface TodoItemInput {
  title: string;
}
