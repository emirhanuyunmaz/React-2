import { useContext } from "react";
import Course from "./Course";
import { CourseContext } from "../context/CourseContext";

export default function Courses(){
    
    const {getAllData , getData } = useContext(CourseContext)
    
    console.log(getAllData)
    return(<div className="flex flex-wrap justify-center gap-3 mt-5 ">
        {/* Yüklenme işlemi olurken gösterilmesi gerek bir comp. olamsı gerekir.*/}
        {/* <p>{getAllData.length !== 0 ? getAllData[0].title : "yok"}</p> */}
        {/* Başta kullanılan üç nokta sayesinde verinin parametrelerine erişime imkanımız olmaktadır. */}
        {
            getAllData.length !== 0 ? <>{
                getAllData.map((course) => <Course key={course.id} {...course} />)
            }
            </> : <div className="flex flex-col items-center" >
                <h1 className="mb-5 text-2xl font-bold">Tüm kursları sildiniz</h1>
            <button className="px-8 py-2 bg-blue-400 hover:bg-blue-500 duration-500 rounded-xl" onClick={getData} >Yenile</button>
            </div>
        }
    </div>)
}