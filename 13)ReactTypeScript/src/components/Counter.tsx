import { useState } from "react";


export default function Counter (){
    const [counter, setCounter] = useState(0);

    function handleClick( event:React.MouseEvent<HTMLButtonElement> ){
        event.preventDefault()
        setCounter(counter+1)
    }

    function handleClickDec( event:React.MouseEvent<HTMLButtonElement> ){
        event.preventDefault()
        setCounter(counter-1)
    }

    function handleClickReset( event:React.MouseEvent<HTMLButtonElement> ){
        event.preventDefault()
        setCounter(0)
    }

    return (<div>
        <h1>{counter}</h1>
        <button onClick={(event) => handleClick(event)} >Arttır</button>
        <button onClick={(event) => handleClickDec(event)} >Azalt</button>
        <button onClick={(event) => handleClickReset(event)} >Reset</button>
    </div>)
}