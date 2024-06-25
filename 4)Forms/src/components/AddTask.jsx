import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function AddTask({setTaskList ,update , task , taskList ,setUpdate}) {
    const [titleTask,setTitleTask] = useState(update ? task.titleTask : "")
    const [descTask,setDescTask] = useState(update ? task.descTask : "")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id:uuidv4(),
            titleTask,
            descTask
        }
        setTaskList((e) => [...e,newTask])
        setTitleTask("")
        setDescTask("")
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        setTaskList(taskList.map((item) => {
            if(item.id!== task.id){
                return item
            }else{
                let newTask = {
                    id:task.id,
                    titleTask,
                    descTask
                }
                return newTask
            }
        } ))
        setUpdate(false)
    }

    return (<>
        {!update ? <div className="mt-5">
        <form className="flex flex-col items-center gap-3">
            <div className="flex flex-col w-1/3 ">
                <label htmlFor="titleTask" className="mb-2 text-xl">Task Title</label>
                <input value={titleTask} onChange={(e) => setTitleTask(e.target.value)} id="titleTask" type="text" className=" p-2 rounded-lg border-2 border-gray-500"/>  
            </div>
            <div className="flex flex-col w-1/3">
                <label htmlFor="descTask" className="mb-2 text-xl">Task Description</label>
                <textarea value={descTask} onChange={(e) => setDescTask(e.target.value)} id="descTask" rows={5} className=" p-2 rounded-lg border-2 border-gray-500"/>
            </div>
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 px-8 py-3 rounded-lg text-white duration-500">Create</button>
        </form>
    </div> : <form className="flex flex-col items-center gap-3">
            <div className="flex flex-col w-full ">
                <label htmlFor="titleTask" className="mb-2 text-xl">Update Task Title</label>
                <input value={titleTask} onChange={(e) => setTitleTask(e.target.value)} id="titleTask" type="text" className=" p-2 rounded-lg border-2 border-gray-500"/>  
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="descTask" className="mb-2 text-xl">Update Task Description</label>
                <textarea value={descTask} onChange={(e) => setDescTask(e.target.value)} id="descTask" rows={5} className=" p-2 rounded-lg border-2 border-gray-500"/>
            </div>
            <button onClick={handleUpdateSubmit} className="bg-green-500 hover:bg-green-700 px-8 py-3 rounded-lg text-white duration-500">Update</button>
        </form>}
    
    </>)
} 