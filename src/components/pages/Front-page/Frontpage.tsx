import React, { useState } from 'react';
import Name from './Name';
import AddTodo from './AddTodo';
import Todolist from './Todolist';

export default function Frontpage() {
  return (
    <div>
      <Name />
      <AddTodo />
      <Todolist />
    </div>
  );
}
