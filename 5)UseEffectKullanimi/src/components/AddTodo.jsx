import axios from "axios"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";


export default function AddTodo(){
    const [todoText,setTodoText] = useState("")


    function addHandleClick(event){
        event.preventDefault()
        if(todoText === "") {
            toast.error('Please enter a word');
        }else{
            const newTodo = {
                text : todoText,
                done: false
            }
            axios.post("http://localhost:3000/todos",newTodo)
            setTodoText("")
        }
    }

    return (<div >
        <form action="" className="flex justify-center mt-5">
            <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder="Add Toto Text"  className="w-3/12 p-2 border-2 border-gray-600 rounded-2xl mr-2"/>
            <button onClick={addHandleClick} className="bg-blue-400 px-6 py-2 rounded-xl hover:bg-blue-500 duration-500">Add</button>
            <Toaster />
        </form>
    </div>)
}