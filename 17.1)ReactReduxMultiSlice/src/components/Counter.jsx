import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../store/counter/counterSlice"


export default function Counter (){
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (<div>
        <button onClick={()=>dispatch(increment())} >Increment</button>
        <p>{counter.value}</p>
        <button onClick={()=>dispatch(decrement())} >Decrement</button>
        <button onClick={() => dispatch(reset())} >Reset</button>
    </div>)
}