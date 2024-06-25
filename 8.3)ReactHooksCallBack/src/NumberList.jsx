import { useEffect, useState } from "react"

export default function NumberList({getItems}){
    const [items,setItem] = useState([])
    useEffect(() => {
        setItem(getItems)
        console.log("Sayılar değişti...")
    },[getItems])


    return (
    <div>
        {items.map((item,index) => <p key={index}>{item}</p>)}
    </div>)
}