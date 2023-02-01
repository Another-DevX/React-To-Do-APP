import React from "react";
import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(
        <h2 className="TodoCounter">You was complete {completed} of {total} ToDos</h2>
    );
}

export {TodoCounter};