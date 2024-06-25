import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import TodoCard from "./TodoCard"
import { TodoType } from "../Types"

export default function TodoList(){
    const todos = useContext(TodoContext)

    
    return(<div className="mt-8 flex justify-center gap-2 flex-wrap items-center">
        {todos.todoList.map(({id,header,todoText}:TodoType) => <TodoCard key={id} id={id} header={header} todoText={todoText} />)}
    </div>)
}