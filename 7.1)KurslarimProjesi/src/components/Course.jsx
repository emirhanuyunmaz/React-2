import { useEffect } from "react"

export default function Course({getData}){
    console.log(getData)
    return(
    <div className="flex flex-col w-1/5 border-2 border-gray-500 rounded-2xl p-5">
        <h1>{getData.title}</h1>
        <h4>{getData.description}</h4>
        <p>{getData.price} TL</p>
    </div>
    )
} 