import { createContext, useReducer } from "react";

const CountContext = createContext()

const intial = 0
const reducer = (state , action) => {
    switch(action){
        case "increment" : 
            return state + 1
        case "decrement" : 
            return state - 1
        case "reset" :
            return 0
        default:
            return state
    }
} 


function CountPovider({children}){
    
    const [count , dispatcher] = useReducer(reducer,intial)
    
    return(
    <CountContext.Provider value={{count,dispatcher}}>
        {children}
    </CountContext.Provider>)
}

export {CountContext,CountPovider}