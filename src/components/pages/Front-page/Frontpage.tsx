import React from 'react';
import Name from './Name';
import AddTodo from './AddTodo';
import Todolist from './Todolist';
import FooterAction from './FooterAction';

export default function Frontpage() {
  return (
    <div>
      <Name />
      <AddTodo />
      <Todolist />
      <FooterAction />
    </div>
  );
}
