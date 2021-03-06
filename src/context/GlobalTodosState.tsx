import React, { useState, Props } from 'react';
import { initialTodoStore, TodosContext } from './todos-context';

export default function GlobalTodosState(props: Props<any>) {
  const [todosStore, setTodosStore] = useState(initialTodoStore);

  const addTodo = (todo: string, completed: boolean) => {
    setTodosStore({
      ...todosStore,
      todos: [...todosStore.todos, { name: todo, completed }],
      latestTodoAction: 'Add'
    });
  };
  const deleteTodo = (index: number) => {
    setTodosStore({
      ...todosStore,
      todos: todosStore.todos.filter((todo, i) => i !== index),
      latestTodoAction: 'Delete'
    });
  };
  const toggleTodoCompleted = (index: number) => {
    const newTodos = [...todosStore.todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodosStore({
      ...todosStore,
      todos: newTodos,
      latestTodoAction: 'Toggle completed'
    });
  };
  const changeLatestTodoAction = (
    newAction: 'Add' | 'Delete' | 'Toggle completed' | 'None'
  ) => {
    setTodosStore({
      ...todosStore,
      latestTodoAction: newAction
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos: todosStore.todos,
        addTodo,
        deleteTodo,
        toggleTodoCompleted,
        latestTodoAction: todosStore.latestTodoAction,
        changeLatestTodoAction
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}
