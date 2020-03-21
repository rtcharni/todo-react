import React, { useContext } from 'react';
import { TodosContext } from '../../../context/todos-context';

export default function Todolist() {
  const todosContext = useContext(TodosContext);

  const todoslist = todosContext.todos.map((todo, i) => {
    return (
      <li key={i}>
        <span>{todo.name}</span>{' '}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            todosContext.toggleTodoCompleted(i);
          }}
        />
        <span
          style={{ marginLeft: 10, color: 'red' }}
          onClick={() => todosContext.deleteTodo(i)}
        >
          X
        </span>
      </li>
    );
  });

  return (
    <div>
      <h3>Todolist</h3>
      <ul>{todoslist}</ul>
    </div>
  );
}
