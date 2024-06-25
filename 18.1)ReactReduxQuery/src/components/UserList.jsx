import { useGetUsersNameQuery } from "../store/apis/usersApi"
import UserCard from "./UserCard"

export default function UserList(){
    const {data , error , isLoading}  = useGetUsersNameQuery() 

    return(<div>

        {
        !isLoading && data.map((item , index) => <UserCard  key={index} user={item} />)
        }

    </div>)
}