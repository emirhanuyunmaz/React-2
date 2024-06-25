import { useState } from "react"
import AddTask from "./AddTask"

export default function SingleTask({task , setTaskList , taskList}) {
    const [update,setUpdate] =useState(false)

    const deleteHandleClick = () => {
        setTaskList(taskList.filter((item) => item.id!== task.id ))
    }

    const updateHandleClick = () => {
        setUpdate(true)
    }

    //UPDATE FUNCTION
    return (<div className="flex flex-col w-96 p-8 border-2 border-blue-500 rounded-3xl">
        {update===false ?<> <h3 className="text-xl font-bold">Task Title</h3>
        <p>{task.titleTask}</p>
        <h3 className="text-xl font-bold">Task Desc</h3>
        <p>{task.descTask}</p>
        <div className="mt-4"> 
            <button onClick={deleteHandleClick} className="mr-2 bg-red-500 hover:bg-red-600 duration-500 px-8 py-1 rounded-lg">Delete</button>
            <button onClick={updateHandleClick} className="bg-blue-500 hover:bg-blue-600 duration-500 px-8 py-1 rounded-lg">Update</button>
        </div> </> :<><AddTask update= {update}  setUpdate={setUpdate} task={task} setTaskList= {setTaskList} taskList={taskList} /></> }

    </div>)
}