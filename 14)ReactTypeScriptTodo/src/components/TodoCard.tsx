import { useContext } from "react"
import { TodoType } from "../Types"
import { TodoContext } from "../context/TodoContext"


export default function TodoCard({id,header,todoText}:TodoType){
    const todos = useContext(TodoContext)

    return(<div className="rounded-xl   w-full sm:w-1/3 bg-green-300 lg:w-1/4 h-52 md:h-48">
        <div className="h-full w-full  ">
            <div className="h-3/4 flex flex-col  overflow-y-auto text-center">
                <h2 className="font-bold text-2xl" >{header}</h2>
                <p >{todoText}</p>
            </div>
            <div className="h-1/4  text-center" >
            <button onClick={() => todos.deleteTodo(id)} className="bg-red-300 w-1/2 hover:bg-red-400 px-8 py-1 rounded-2xl mt-2  duration-300 ">Delete</button>
            </div>

        </div>



    </div>)


}