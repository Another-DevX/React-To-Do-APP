import React from "react";
import './TodoItem.css';

function TodoItem(props){

    return(
        <li className={`ContainerTodo ${props.completed && 'checked-background'}`} >
            <span className={`icon icon-check ${props.completed && 'checked-icon'}`} onClick={props.onComplete}>✓</span>
            <p className={`TodoText ${props.completed && 'checked-text'}`}>{props.text}</p>
            <span className="icon icon-remove" onClick={props.onRemove}>x</span>
        </li>
    );
}

export {TodoItem};