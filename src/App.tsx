import React from 'react';
import Frontpage from './components/pages/Front-page/Frontpage';
import './App.css';
import GlobalTodosState from './context/GlobalTodosState';

export default function App() {
  return (
    <GlobalTodosState>
      <Frontpage />
    </GlobalTodosState>
  );
}
