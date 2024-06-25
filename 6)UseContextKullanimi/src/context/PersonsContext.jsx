import axios from "axios";
import { createContext } from "react";

const PersonContext = createContext()

function PersonProvider({children}){

    function addNewPerson(phoneNumber,name){
        const newPerson = {
            name:name,
            number:phoneNumber
        }
        axios.post(`http://localhost:3000/persons`,newPerson)
    }
    async function getPersonsList(){
        const data = await axios.get(`http://localhost:3000/persons`)
        return data.data
    }

    function deletePerson(id) {
        axios.delete(`http://localhost:3000/persons/${id}`)
    }

    function editPerson(id,name,number){
        const editPerson = {
            name,number
        }
        axios.put(`http://localhost:3000/persons/${id}`,editPerson)
    }

    return (<PersonContext.Provider value={{addNewPerson,getPersonsList,deletePerson , editPerson}}>
        {children}
    </PersonContext.Provider>)
}

export {PersonProvider}
export default PersonContext
