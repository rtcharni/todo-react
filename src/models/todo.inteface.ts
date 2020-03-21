export interface Todo {
  name: string;
  completed: boolean;
}

export interface TodosContextModel {
  todos: Todo[];
  addTodo: (todo: string, completed: boolean) => void;
  deleteTodo: (index: number) => void;
  toggleTodoCompleted: (index: number) => void;
}
