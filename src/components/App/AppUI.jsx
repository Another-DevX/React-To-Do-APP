import './App.css';
import React, { useState } from "react";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Title } from '../Title/title';
import { TodoContext } from '../../context/TodoContext';


function AppUI(){
    
    const {
        error,
        loading,
        searchedTodos,
        toggleCompletedToDos,
        removeToDos,
    } = React.useContext(TodoContext);

    return(
        <div className='App'>
        <Title />
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <p>Don't worry, we will restart the server soon :D</p>}
          {loading && <p>Loading, keep calm</p>}
          {(!loading && !searchedTodos.length) && <p>Lets write your first to do</p>}

          {searchedTodos.map(todos => (
          <TodoItem 
            key={todos.text}
            text={todos.text}
            completed = {todos.completed}
            onComplete = {() => toggleCompletedToDos(todos)}
            onRemove = {() => removeToDos(todos)}
          />))
          }
        </TodoList>
        <CreateTodoButton />
      </div>
    )
}

export {AppUI}