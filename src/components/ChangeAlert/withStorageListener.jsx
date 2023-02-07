import React from "react";

function withStorageListener(WrapedComponent){

    return function WrappedComponentWithStorageListener(props){
        
        const [storageChange, setStorageChange] = React.useState(false);

        React.useEffect(()=>{
            const onChange = (change) => {
                if(change.key === "TODO_V1"){
                    console.log('Hubo cambios en TODO_V1');
                    setStorageChange(true);
                }
            };
            window.addEventListener('storage', onChange);
            return () => {
                window.removeEventListener('storage',onChange);
            }
        })


        const toggleShow = () =>{
            props.sync();
            setStorageChange(false)
        }  

        return <WrapedComponent
        show={storageChange}
        toggleShow = {toggleShow}
        />
        

    
    } 

    

}

export{withStorageListener}