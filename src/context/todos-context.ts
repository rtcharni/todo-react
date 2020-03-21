import React from 'react';
import { TodosContextModel } from '../models/todo.inteface';

export const initialTodos: TodosContextModel = {
  todos: [
    { name: 'Go to gym', completed: false },
    { name: 'Buy food', completed: false },
    { name: 'Reserve tennis for next week', completed: false }
  ],
  addTodo: (todo: string, completed: boolean) => {},
  deleteTodo: (index: number) => {},
  toggleTodoCompleted: (index: number) => {}
};

export const TodosContext = React.createContext(initialTodos);
TodosContext.displayName = 'TodosContext';
