import React, { useState } from 'react';
import Frontpage from './components/pages/Front-page/Frontpage';
import './App.css';
import { TodosContext, initialTodos } from './context/todos-context';

function App() {
  const [todosStore, setTodosStore] = useState(initialTodos);

  const addTodo = (todo: string, completed: boolean) => {
    setTodosStore({
      ...todosStore,
      todos: [...todosStore.todos, { name: todo, completed }]
    });
  };
  const deleteTodo = (index: number) => {
    setTodosStore({
      ...todosStore,
      todos: todosStore.todos.filter((todo, i) => i !== index)
    });
  };
  const toggleTodoCompleted = (index: number) => {
    const newTodos = [...todosStore.todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodosStore({
      ...todosStore,
      todos: newTodos
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
      <Frontpage />
    </TodosContext.Provider>
  );
}

export default App;
