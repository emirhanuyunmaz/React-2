import { useContext } from "react"
import { CountContext } from "./CountContext"

export default function CounterComponent(){

    const counter = useContext(CountContext)



    return (<div className="text-center">
        <h1>Sayaç : {counter.count} </h1>
        <button onClick={() => counter.dispatcher("increment")} className="bg-yellow-400 hover:bg-yellow-500 duration-500 px-4 py-1 rounded-xl">Increment</button>
        <button onClick={() => counter.dispatcher("decrement")} className="bg-yellow-400 hover:bg-yellow-500 duration-500 px-4 py-1 rounded-xl">Decrement</button>
        <button onClick={() => counter.dispatcher("reset")} className="bg-yellow-400 hover:bg-yellow-500 duration-500 px-4 py-1 rounded-xl">Reset</button>

    </div>)
}