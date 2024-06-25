import { useDispatch } from "react-redux"
import { deleteBill } from "../store/slices/billsSlice"

export default function BillsCard ({item}){

    const dispatch = useDispatch()

    return(<div className="bg-red-400 flex gap-8 px-4 py-2 rounded-2xl justify-between">
        <h2 className="font-bold ">{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => dispatch(deleteBill(item.id))} className="bg-red-500 px-4 py-1 rounded-2xl hover:text-white duration-300" >Delete</button>
    </div>)
}