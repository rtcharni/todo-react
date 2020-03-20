import React, { useState } from 'react';
import Name from './Name';
import Todo from './Todo';
import Todolist from './Todolist';

export default function Frontpage() {
  return (
    <div>
      <Name />
      <Todo />
      <Todolist />
    </div>
  );
}
