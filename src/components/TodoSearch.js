import React from "react";
import '../styles/TodoSearch.css';

function TodoSearch(){

    const onSearchValueChange  = (event) =>{
        console.log(event.target.value)
    }

    return(
        <input 
        placeholder="Search"
        className="TodoSearch" 
        onChange={onSearchValueChange}/>
    );
}

export {TodoSearch};