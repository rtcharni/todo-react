import React from 'react';
import AddTodo from './AddTodo';
import Todolist from './Todolist';
import FooterAction from './FooterAction';

export default function Frontpage() {
  return (
    <div>
      <AddTodo />
      <Todolist />
      <FooterAction />
    </div>
  );
}
