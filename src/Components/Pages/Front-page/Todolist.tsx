import React, { useState } from 'react';
import { Todo } from '../../../models/todo.inteface';

const initialTodos: Todo[] = [
  { name: 'Go to gym', completed: false },
  { name: 'Buy food', completed: false },
  { name: 'Reserve tennis for next week', completed: false }
];

export default function Todolist() {
  const [todolist, setTodolist] = useState(initialTodos);

  const handleCheckboxClick = (value: boolean, clickedI: number) => {
    console.log(value, clickedI);
    setTodolist(
      todolist.map((todo, todoI) =>
        todoI === clickedI ? { ...todo, completed: value } : todo
      )
    );
  };

  const todolistHtml = todolist.map((todo, i) => {
    return (
      <li key={i}>
        <span>{todo.name}</span>{' '}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={event => {
            handleCheckboxClick(event.target.checked, i);
          }}
        />
      </li>
    );
  });
  return (
    <div>
      <h3>Todolist</h3>
      <ul>{todolistHtml}</ul>
    </div>
  );
}
