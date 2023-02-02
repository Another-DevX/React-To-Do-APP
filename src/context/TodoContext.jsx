import React from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

    //React custom hook, calls useLocalStorege and save todos in TODO_V1
    const {
    item : todos,
    saveItem : saveTodos,
    loading,
    error
    } = useLocalStorage('TODO_V1', []); 
    //React hook to search values
    const [searchValue, setSearchValue] = React.useState('');
    //Iter in all todos, and find the object that includes a part of the search
    const todoInSearch = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))  
    const totalTodos = todos.length;    
    const completedTodos = todos.filter(todo => !!todo.completed).length;   
    //Search the index of the object that calls this function, and call the hook of useLocalStorage
    //with saveTodos method
    const toggleCompletedToDos = (todoObject) => {
    const todoIndex = todos.findIndex(todo => todo === todoObject);
    const newItem = [...todos];
    newItem[todoIndex].completed = !newItem[todoIndex].completed;
    saveTodos(newItem);
    }
    const removeToDos = (todoObject) => {
    const todoIndex = todos.findIndex(todo => todo === todoObject);
    const newItem = [...todos];
    newItem.splice(todoIndex,1);
    saveTodos(newItem);
    }

    //Initialize the variable of searchedTodos with a void array
    let searchedTodos = [];

    //If the user don't write anything in the search bar, all todos are valid to show
    if (searchValue.length < 1){
        searchedTodos = todos
    }
    //If the user write anything, react calls the todoInSearch function, if the text match whith any 
    //todo,react show it
    else{
        searchedTodos = todoInSearch
    }

    return(
    <TodoContext.Provider value={{
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleCompletedToDos,
    removeToDos 
    }}>
        {props.children}
    </TodoContext.Provider>
    )
}
export {TodoContext, TodoProvider}