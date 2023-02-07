import React from "react";
import './TodoForm.css'
import "animate.css"

function TodoForm({setOpenModal,addTodo}){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () =>{
        setOpenModal(false)
    }
    const onSubmit = (event) =>{

        if(newTodoValue == ''){
            event.preventDefault();
            onCancel();
        }
        else{
            addTodo(newTodoValue);
            event.preventDefault();
            onCancel();
        }
    }


    return(
        <form
        className="todo-form animate__animated animate__backInDown" 
        onSubmit={onSubmit}>
            <label className="form-title">Create your to do</label>
            <div className="todo-container-form">
                <textarea
                className="todo-text-form"
                value={newTodoValue}
                placeholder="Write your to do"
                onChange={onChange}
                />
                <div className="btn-container-modal">
                    <button
                    className="btn-form add-btn"
                    type="submit"
                    >Add</button>
                        <button
                    className="btn-form cancel-btn"
                    onClick={onCancel}
                    >Cancel</button>
                </div>
            </div>
        </form>
    );
}

export {TodoForm}