import { useContext } from "react"
import { CourseContext } from "../context/CourseContext"

export default function Course({id,title,description,price}){
    // console.log(title)

    const { deleteCourse } = useContext(CourseContext)

    return (
        <div className="w-64 border-2 border-gray-500 rounded-xl px-10 py-5 flex flex-col justify-between">
            <div className="">
                <h2 className="font-bold text-3xl">{title}</h2>
                <p>{description}</p>
                <p>{price} TL</p>
            </div>
            <div className="flex flex-col mt-2">
            <button  className="bg-purple-500 hover:bg-purple-600 duration-500 px-8 py-2 rounded-2xl" onClick={() => deleteCourse(id)} >Sil</ button>
            </div>            
        </div>
    )
}