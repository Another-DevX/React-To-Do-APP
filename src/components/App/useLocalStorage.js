import React from "react";

function useLocalStorage(itemName, initialValue){

    const[synchronizedItem, setSynchronizedItem] = React.useState(true)
    const[error, setError] = React.useState(false);
    const[loading, setLoading] = React.useState(true);

    //React useState, this is a hook and tells to react to re-render
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(()=>{
            try{
                //Get localStorage information
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem; 
                //Check if the local storage had information
                if(!localStorageItem){
                    //Append void list 
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                    parsedItem = [];
                }else{
                    //Add the localStorage values to parsedItem
                    parsedItem = JSON.parse(localStorageItem);
                };
                setItem(parsedItem)
                setLoading(false)
                setSynchronizedItem(true)
            }catch(error){
            setError(error)
            }
        },3000)
    }, [synchronizedItem]);

    const saveItem = (newItem) => {
        try{
            //Add new o a modification of a existing item
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
            setLoading(false);
        }catch(error){
            setError(error)
        }
    };

    const sync = () => {
        setLoading(true);
        setSynchronizedItem(false);
    }

    return{
        item,
        saveItem,
        loading,
        error,
        sync
    }

}

export {useLocalStorage}