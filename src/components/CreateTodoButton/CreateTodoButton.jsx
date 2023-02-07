import React from "react";
import './CreateTodoButton.css';
import {IoAdd} from "react-icons/io5"



function CreateTodoButton({setOpenModal, openModal, }){

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