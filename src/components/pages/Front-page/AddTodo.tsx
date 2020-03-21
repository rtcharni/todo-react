import React, { useState, useContext } from 'react';
import { TodosContext } from '../../../context/todos-context';

export default function AddTodo() {
  const [todo, setTodo] = useState('');
  const todosContext = useContext(TodosContext);

  return (
    <div>
      <label>New Todo</label>
      <input
        type="text"
        value={todo}
        onChange={event => {
          setTodo(event.target.value);
        }}
      />
      <button
        disabled={!todo.length}
        onClick={() => {
          todosContext.addTodo(todo, false);
          setTodo('');
        }}
      >
        Add
      </button>
    </div>
  );
}
