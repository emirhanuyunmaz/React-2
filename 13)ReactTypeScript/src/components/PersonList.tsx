
type UserType = {
    userList :{
        id:number,
        name:string
    }[]
}


export default function PersonList (props:UserType){
    return(<div>
        {props.userList.map((item,index) => {
            return (<p key={index} >{item.name}</p>)
        })}
    </div>)
}