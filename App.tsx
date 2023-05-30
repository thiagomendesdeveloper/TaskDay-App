import React from 'react';
import Routes from './src/routes';
import { TodoProvider } from './src/contexts/List';

function App() {
  return (
    <TodoProvider>
      <Routes />
    </TodoProvider>
  )
}

export default App;
