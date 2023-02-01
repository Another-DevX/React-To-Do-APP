import React from "react";
import '../styles/CreateTodoButton.css';

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert(msg)
    }


    return(
        <button 
        className="btn-todo"
        onClick={() => onClickButton('Aqui se deberia mostrar un modal')}
        >
            +
            </button>
    );
}

export {CreateTodoButton};