import React, { useState } from 'react';
import Name from './Name';
import Todo from './Todo';

export default function Frontpage() {
  return (
    <div>
      <Name />
      <Todo />
    </div>
  );
}
