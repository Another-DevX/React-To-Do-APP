import './App.css';
import React, { useState } from "react";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Title } from '../Title/title';
import { useTodos } from './useTodos';  
import { Modal } from '../../modal';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { TodosEmpty } from '../TodosEmpty';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';


function App() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompletedToDos,
    removeToDos,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    syncTodos
  } = useTodos();
  
  return(
    <div className='App'>
    <Title />
    <TodoHeader>
      <TodoCounter 
      completed = {completedTodos}
      total = {totalTodos}
      />
      <TodoSearch 
      loading = {loading}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue} />
    </TodoHeader>

    <TodoList
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      error = {error}
      loading   = {loading}
      searchedTodos = {searchedTodos}
      onError = {() => <TodosError />}
      onLoading = {() => <TodosLoading />}
      onEmpty = {() => <TodosEmpty />}
      onEmptySearchResults = {(searchText) => <p>There aren't results to {searchText}</p>}
      render = {todos => (
      <TodoItem 
        key={todos.text}
        text={todos.text}
        completed = {todos.completed}
        onComplete = {() => toggleCompletedToDos(todos)}
        onRemove = {() => removeToDos(todos)}
      />)}
    >
      {todos => (
      <TodoItem 
        key={todos.text}
        text={todos.text}
        completed = {todos.completed}
        onComplete = {() => toggleCompletedToDos(todos)}
        onRemove = {() => removeToDos(todos)}
      />)}
    </TodoList>
    {openModal && (
      <Modal>
        <TodoForm 
        setOpenModal = {setOpenModal}
        addTodo = {addTodo}
        />
      </Modal>
    )}
    <CreateTodoButton 
    openModal= { openModal}
    setOpenModal = {setOpenModal}/>

    <ChangeAlertWithStorageListener sync={syncTodos}/>
    </div>
  )

}

export {App};
