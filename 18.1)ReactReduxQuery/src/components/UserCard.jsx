import { useState } from "react"
import UserAlbumList from "./UserAlbumList"

export default function UserCard({user}){
    const [isClick,setIsClick] = useState(false)

    return(<div className=" bg-gray-400 m-4 px-2 py-4 rounded-3xl">
       <div className="flex justify-between">
            <h3 className="">{user.name}</h3> 
            <button onClick={()=> setIsClick(!isClick)} className="hover:text-white px-6">{!isClick ? "<" : "v"}</button>
       </div>
        {isClick && <UserAlbumList userID={user.id} />}
    </div>)
}