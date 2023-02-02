import './App.css';
import React, { useState } from "react";
import { TodoProvider } from '../../context/TodoContext';
import { AppUI } from './AppUI';

function App() {
  return (
    <TodoProvider>
      <AppUI>
      </AppUI>
    </TodoProvider>
  );
}

export {App};
