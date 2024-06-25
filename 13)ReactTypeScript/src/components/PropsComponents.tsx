
//Typescript ile bir props tanımlanacak olursa tip belirlenmesi yapılmalıdır.
type Person ={
    name:string,
    surname:string
}

export default function PropsComponents(props:Person){
    return(<div>
            <p>{props.name}</p>
            <p>{props.surname}</p>
        
    </div>)
}