import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css"
import "animate.css"

function ChangeAlert({show, toggleShow}){
    if(show){
        return (
            <div className="changeAlert-container animate-animated animate__zoomInDown">
                <div className="changeAlert-subContainer">
                    <p className="changeAlert-text">Hubo cambios</p>
                    <button className="changeAlert-btn"
                    onClick={() => toggleShow(false)}
                    >
                        Volver a cargar la informacion
                    </button>
                </div>
            
        </div>
        )
    }


}

const ChangeAlertWithStorageListener  = withStorageListener(ChangeAlert)


export {ChangeAlertWithStorageListener}