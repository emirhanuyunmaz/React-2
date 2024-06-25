import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo } from "../store/todo/todoSlice"

export default function Todo(){
    const [values,setValue] = useState("") 
    const todo = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    console.log(todo) 

    function handleClick(event){
        event.preventDefault()
        dispatch(addTodo(values))
    }

    function deleteTodo(todo){
        dispatch(removeTodo(todo))
    }

    return (<div>

        <form>
            <input value={values} onChange={(event) => setValue(event.target.value)} />
            <button onClick={(event) => handleClick(event)} >Save</button>
        </form>
        <div>
            {todo.todoList.map((item , index) => <p onClick={()=>deleteTodo(item)} key={index}>{item}</p>)}
        </div>

    </div>)
}