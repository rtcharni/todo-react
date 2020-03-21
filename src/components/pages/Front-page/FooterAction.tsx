import React, { useContext } from 'react';
import { TodosContext } from '../../../context/todos-context';

export default function FooterAction() {
  const todosContext = useContext(TodosContext);

  return (
    <div style={{ marginTop: 100 }}>
      <span>Your latest todo action is: {todosContext.latestTodoAction}</span>
    </div>
  );
}
