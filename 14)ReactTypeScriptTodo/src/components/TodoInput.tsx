import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export default function TodoInput(){
    const todos = useContext(TodoContext)

    return (<div className="flex flex-col  justify-center items-center gap-4 mt-8">
        <input type="text" value={todos.inputHeader} onChange={(event) => todos.setInputHeader(event.target.value)} name="header" placeholder="Header" className="outline-none py-2 px-1 border-b-2 w-1/5 focus:border-b-black " />
        <input type="text" value={todos.inputText} onChange={(event) => todos.setInputText(event.target.value)} name="todoText" placeholder="Todo" className="outline-none py-2 px-1 border-b-2 w-1/5 focus:border-b-black " />
        <button onClick={todos.newTodo}  className="bg-green-400 px-8 py-1 rounded-xl hover:bg-green-500 duration-500">Add</button>
    </div>)
}