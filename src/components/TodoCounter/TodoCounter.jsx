import React from "react";
import './TodoCounter.css';


function TodoCounter({completed, total}){

            if(total > 0){
                return(<h2 className="TodoCounter">You was complete {completed} of {total} ToDos</h2>)
            }
            else{
                return(<h2 className="TodoCounter">You don't have any ToDo yet</h2>)
            }
}

export {TodoCounter};