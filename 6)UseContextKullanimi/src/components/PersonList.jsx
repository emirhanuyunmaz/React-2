import { useContext, useEffect, useState } from "react"
import PersonContext from "../context/PersonsContext"
import axios from "axios"
import PersonCard from "./PersonCard"

export default function PersonList(){
    //Değişkenleri de context içerisinde tanımlarsak oradaki fonk geri dönüş alabiliriz.
    const [personsList,setPersonsList] = useState([])
    //const {getPersonsList} = useContext(PersonContext)
    
    async function getAllData(){
        const data = getPersonsList()
        setPersonsList(data)
        console.log(personsList.length)
        
    }
    async function getPersonsList(){
        const data = await axios.get(`http://localhost:3000/persons`)
        setPersonsList(data.data)
    }
    
    useEffect(() => {
        getPersonsList()   
    },[personsList])

    return(<div className="flex flex-col items-center mt-6 ">
        {personsList.length !== 0 ? <>{personsList.map((person) => <PersonCard key={person.id} person={person} /> )}</> : <></>}
    </div>)
}