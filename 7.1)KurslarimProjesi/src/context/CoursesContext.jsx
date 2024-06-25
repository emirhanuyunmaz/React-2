import axios from "axios";
import { createContext, useEffect, useState } from "react";


const coursesContext = createContext()

function CoursesProvider({children}){

    const [allData,setAllData] = useState([])

    const [getData,setData] = useState({})

 
    async function getAllData(){
        const data = await axios.get(`http://localhost:3000/courses`)
        setAllData(data.data) 
    }

    useEffect(() => {
        getAllData()
    },[])


    return (<coursesContext.Provider value={{allData , getData}}>
        {children}
    </coursesContext.Provider>)
}

export {coursesContext,CoursesProvider}