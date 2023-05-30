import React from 'react';
import Home from './src/screens/home';
import Router from './src/routes/routes';
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
