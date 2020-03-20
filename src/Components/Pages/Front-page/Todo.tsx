import React, { useState } from 'react';

export default function Todo() {
  const [todo, setTodo] = useState('');
  const handleAddClick = () => {
    console.log(todo);
  };

  return (
    <div>
      <label>New Todo</label>
      <input
        type="text"
        onChange={event => {
          setTodo(event.target.value);
        }}
      />
      <button disabled={!todo.length} onClick={handleAddClick}>
        Add
      </button>
    </div>
  );
}
