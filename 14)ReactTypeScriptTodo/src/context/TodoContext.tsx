import { createContext, useEffect, useState } from "react";
import { TodoType } from "../Types";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext<any>(null)


function TodoContextProvider({children} :any){
    const [todoList,setTodoList] = useState<TodoType[]>([])

    const [inputHeader,setInputHeader] = useState<string>("")
    const [inputText,setInputText] = useState<string>("")

    async function newTodo (){

        const new_todo ={
            "id":uuidv4(),
            "header":inputHeader,
            "todoText":inputText
        }

        await axios.post("http://localhost:3000/todoList",new_todo)
        setInputHeader("")
        setInputText("")
    }

    async function getTodos (){
        const todos:TodoType[] = await (await axios.get("http://localhost:3000/todoList")).data
        setTodoList(todos)
    }

    async function deleteTodo(todoID:string){
        await axios.delete(`http://localhost:3000/todoList/${todoID}`)
    }

    useEffect(() => {
        getTodos()
    },[todoList])

    return <TodoContext.Provider value={{todoList , newTodo , inputHeader,setInputHeader,inputText,setInputText , deleteTodo}}>
        {children}
    </TodoContext.Provider>
}

export {TodoContext,TodoContextProvider}