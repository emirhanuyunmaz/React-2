import { useContext, useState } from "react"
import PersonContext from "../context/PersonsContext"

export default function NewPerson({edit,person , setEdit}){
    const {addNewPerson , editPerson} = useContext(PersonContext)
    const [number,setNumber] = useState(edit ? person.number : "")
    const [name,setName] = useState(edit ? person.name : "")


 
    return(<div className="flex justify-center">
        {edit ? <form action="" className="flex  bg-gradient-to-r from-blue-400 to-red-400 rounded-xl p-2">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" className="border-gray-500 border-solid border-2 rounded-xl p-1" />
            <p>{"<==>"}</p>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Number" className="border-gray-500 border-solid border-2 rounded-xl p-1" />
            <button onClick={(e) => {
                e.preventDefault()
                editPerson(person.id,name,number)
                setEdit(false)
                }} className="bg-blue-400 hover:bg-blue-500 duration-500 px-4 py-1 rounded-xl ml-2">Edit</button>
        </form> :  <form action="" className="flex">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" className="border-gray-500 border-solid border-2 rounded-xl p-1" />
            <p>{"<==>"}</p>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Number" className="border-gray-500 border-solid border-2 rounded-xl p-1" />
            <button onClick={(e) => {
                e.preventDefault()
                addNewPerson(number,name)
                setNumber("") 
                setName("")
                }} className=" bg-blue-400 hover:bg-blue-500 duration-500 px-3 py-1 rounded-xl ml-2">Add</button>
        </form>}
        
    </div>)
}