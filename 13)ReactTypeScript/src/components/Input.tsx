import { useState } from "react"

export default function Input(){
    type s=string[]

    const [text,setText] = useState("")
    const [list , setList] = useState<string[]>([])
    

    function onChange(event : React.ChangeEvent<HTMLInputElement>){
        setText(event.target.value)
    
    }

    function handleClick(event:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault()
        setList((e) => [...e,text])
        setText("")
    }

    return(<div>
        <input type="text" value={text} onChange={(event) => onChange(event)} />
        <button onClick={(event) => handleClick(event)} >Ekle</button>
        {list.map((item,index) => <p key={index}>{item}</p>)}
    </div>)
}