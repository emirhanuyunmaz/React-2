import { useContext, useState } from "react"
import PersonContext from "../context/PersonsContext"
import axios from "axios"
import NewPerson from "./NewPerson"

export default function PersonCard({person}){

    const [mouseControl,setMouseControl] = useState(false)
    const [editPerson,setEditPerson] = useState(false)


    const {deletePerson} = useContext(PersonContext)

    const mause = (event) => {
        setMouseControl(true)
        console.log("mouse enter")
    }
    const mouseleave = (event) => {
        setMouseControl(false)
    }

    const editHandleClick = () => {
        setEditPerson(true)
    }

    
    return(<div className="flex justify-center bg-gradient-to-r from-blue-400 to-red-400 rounded-xl min-w-80 min-h-12 group " onMouseLeave={mouseleave} onMouseEnter={mause}>
    {editPerson ? <><NewPerson edit={editPerson} person={person} setEdit={setEditPerson} /></> : <>{!mouseControl ? <>
    <p className="bg-blue-400 p-3 rounded-l-xl group-hover:bg-blue-400" >{person.name}</p>
    <p className="bg-gradient-to-r from-blue-400 to-red-400 p-3 group-hover:to-blue-400">{"<==>"}</p>
    <p className="bg-red-400 p-3 rounded-r-xl group-hover:bg-blue-400">{person.number}</p>
    </> : <div className="w-full flex justify-center items-center  " ><button mouseLeave={mouseleave} className="bg-blue-400 px-5  rounded-xl  mr-3" onClick={(e) => {
        e.preventDefault()
        editHandleClick()}}>Edit</button>
    <button onClick={(e) => {
        e.preventDefault()
        deletePerson(person.id)
    }} className="bg-red-400 px-5 rounded-xl ">Delete</button></div>}</>}
</div>)

}