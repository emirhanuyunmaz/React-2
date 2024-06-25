import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CourseContext = createContext([])

function CourseProvider({children}){
    const [getAllData,setAllData] = useState([])


    async function getData(){
        const data = await axios(`http://localhost:3000/courses`)
        setAllData(data.data) 
    }
    useEffect(() => {
        getData()
    },[])

    function deleteCourse(id){
        const newCourseList = getAllData.filter((course) => course.id !== id)
        setAllData(newCourseList)
    }

    return (
        <CourseContext.Provider value={{getAllData , getData , deleteCourse}}>
            {children}
        </CourseContext.Provider>
    )
}

export {CourseContext,CourseProvider}