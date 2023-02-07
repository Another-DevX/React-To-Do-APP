import React from "react";
import './TodoSearch.css';


function TodoSearch({setSearchValue,searchValue,loading}){

    const onSearchValueChange  = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input 
        placeholder="Search"
        className="TodoSearch" 
        value={searchValue}
        disabled={loading}
        onChange={onSearchValueChange}/>
    );
}

export {TodoSearch};

