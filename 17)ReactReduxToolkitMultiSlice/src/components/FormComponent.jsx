import { useDispatch, useSelector } from "react-redux"
import { changeDesc, changePrice, changeTitle } from "../store/slices/formSlice";
import { addBill } from "../store/slices/billsSlice";
import { nanoid } from "nanoid";

export default function FormComponent(){
    
    const dispatch = useDispatch()

    

    const {title , description , price} = useSelector((state) => {
        //console.log(state);
        return state.forms
    })
    //console.log(title);
    

    function onSubmit (event){
        event.preventDefault()
        const values = {
            id:nanoid(),
            title,
            description,
            price
        }
        dispatch(addBill(values))
        
        
        

    }

    return (<div className="flex justify-center mt-32 text-gray-600">
        
        <form className="flex gap-2 bg-green-300 p-4 rounded-2xl" onSubmit={(event) => onSubmit(event)}>
            <div className="flex flex-col gap-4">
                <label className="w-1/2"   htmlFor="">Title</label>
                <label className="" htmlFor="">Description</label>
                <label className="w-1/5" htmlFor="">Price</label>
                <button onClick={(event) => onSubmit(event)} className="bg-blue-200 rounded-xl hover:bg-blue-300 duration-500 px-2 py-1">Add</button>
            </div>

            <div className="flex flex-col gap-2">
                <input   value={title} onChange={(event) => dispatch(changeTitle(event.target.value))} className="bg-blue-200 outline-none rounded-2xl px-2 py-1 " type="text" />
                <input value={description} onChange={(event) => dispatch(changeDesc(event.target.value))} className="bg-blue-200 outline-none rounded-2xl px-2 py-1 " type="text" />
                <input value={price} onChange={(event) => dispatch(changePrice(event.target.value))} className="bg-blue-200 outline-none rounded-2xl px-2 py-1" type="text" />
            </div>
            
        </form>

    </div>)
}