export interface Todo {
  name: string;
  completed: boolean;
}

export interface TodosContextModel {
  todos: Todo[];
  addTodo: (todo: string, completed: boolean) => void;
  deleteTodo: (index: number) => void;
  toggleTodoCompleted: (index: number) => void;
  latestTodoAction: 'Add' | 'Delete' | 'Toggle completed' | 'None';
  changeLatestTodoAction: (
    newAction: 'Add' | 'Delete' | 'Toggle completed' | 'None'
  ) => void;
}
