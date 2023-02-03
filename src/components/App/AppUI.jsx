import './App.css';
import React, { useState } from "react";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Title } from '../Title/title';
import { TodoContext } from '../../context/TodoContext';
import { Modal } from '../../modal';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { TodosEmpty } from '../TodosEmpty';

function AppUI(){
    
    const {
        error,
        loading,
        searchedTodos,
        toggleCompletedToDos,
        removeToDos,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return(
        <div className='App'>
        <Title />
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <TodosError error = {error}/>}
          {loading && <TodosLoading/>}
          {(!loading && !searchedTodos.length) && <TodosEmpty/>}

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
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <CreateTodoButton />
      </div>
    )
}

export {AppUI}