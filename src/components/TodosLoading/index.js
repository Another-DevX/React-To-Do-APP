import React from "react";
import "./TodosLoading.css"


function TodosLoading(){
    return(
        <div className="loading-container">
            <div className="loading-toDo"></div>
            <div className="loading-toDo"></div>
            <div className="loading-toDo"></div>
        </div>
    )
}

export {TodosLoading}