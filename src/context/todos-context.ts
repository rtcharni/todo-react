import React from 'react';
import { TodosContextModel } from '../models/todo.inteface';

export const initialTodoStore: TodosContextModel = {
  todos: [
    { name: 'Go to gym', completed: false },
    { name: 'Buy food', completed: false },
    { name: 'Reserve tennis for next week', completed: false }
  ],
  addTodo: (todo: string, completed: boolean) => {},
  deleteTodo: (index: number) => {},
  toggleTodoCompleted: (index: number) => {},
  latestTodoAction: 'None',
  changeLatestTodoAction: (
    newAction: 'Add' | 'Delete' | 'Toggle completed' | 'None'
  ) => {}
};

export const TodosContext = React.createContext(initialTodoStore);
TodosContext.displayName = 'TodosContext';
