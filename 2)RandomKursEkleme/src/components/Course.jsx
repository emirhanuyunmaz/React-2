import C from "../images/c.png"
import Java from "../images/java.png"
import Kotlin from "../images/kotlin.png"
import Python from "../images/python.png"
import ReactImg from "../images/react.png"


export default function Course({numbers}){
    const imageList= [C,Java,Kotlin,Python,ReactImg]
    console.log(numbers)


    return(
    <div className="flex flex-wrap gap-1 mt-3">
        {numbers.map((item , index) => <img src={imageList[item]} className="border-gray-400 border-2 rounded-lg p-3 hover:scale-125 duration-500 w-80 h-80 hover:cursor-pointer" alt="" /> )}
        
       
    </div>)
}