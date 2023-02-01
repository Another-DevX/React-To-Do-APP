import React from "react";
import '../styles/TodoItem.css';

function TodoItem(props){
    const onComplete = () => {
        alert('To do ' + props.text + ' Completed')
    }

    const onDelete = () => {
        alert('To do ' + props.text + ' Removed')
    }


    return(
        <li className={`ContainerTodo ${props.completed && 'checked-background'}`} >
            <span className={`icon icon-check ${props.completed && 'checked-icon'}`} onClick={onComplete}>✓</span>
            <p className={`TodoText ${props.completed && 'checked-text'}`}>{props.text}</p>
            <span className="icon icon-remove" onClick={onDelete}>x</span>
        </li>
    );
}

export {TodoItem};