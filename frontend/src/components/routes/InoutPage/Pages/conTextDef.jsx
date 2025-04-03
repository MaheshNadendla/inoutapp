import {React,useState} from 'react'

import {createContext} from 'react'

export const ConTextDef= createContext();


const ContextProvider =(props)=> 
    {

        const [rotate,setRotate]=useState(false);

        return (
                <ConTextDef.Provider value={{rotate,setRotate}}>
                    {props.children}
                </ConTextDef.Provider>
        )
    }

export default ContextProvider
