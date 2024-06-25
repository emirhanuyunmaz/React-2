import axios from "axios"
import { useEffect, useState } from "react"
import TodoCard from "./TodoCard"

export default function TodoList() {

    const [todoList,setTodoList] = useState([])

    async function getData() {
        const getTodoList = await axios.get(`http://localhost:3000/todos`)
        setTodoList(getTodoList.data)
    } 

    useEffect(()=>{
        getData()
    },[todoList])

    return(<div className="mt-10  flex flex-col-reverse items-center gap-3">
        {todoList.map((item) => <TodoCard key={item.id} todo = {item} />)}
        
    </div>)
}