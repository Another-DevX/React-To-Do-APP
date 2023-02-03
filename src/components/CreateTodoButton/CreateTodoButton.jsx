import React from "react";
import { TodoContext } from "../../context/TodoContext";
import './CreateTodoButton.css';
import {IoAdd} from "react-icons/io5"



function CreateTodoButton(){
    const {openModal, setOpenModal} = React.useContext(TodoContext)

    const onClickButton = () => {
        setOpenModal(!openModal)
    }
        return(
            <button 
            className="btn-todo no-modal"
            onClick={onClickButton}
            >
                <IoAdd/>
            </button>
        )
}
    


export {CreateTodoButton};