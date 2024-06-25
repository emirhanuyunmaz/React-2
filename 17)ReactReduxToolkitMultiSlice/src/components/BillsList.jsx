import { useDispatch, useSelector } from "react-redux"
import BillsCard from "./BillsCard";
import { onChangeSearchStr } from "../store/slices/billsSlice";

export default function BillsList(){
    const bills = useSelector((state) => state.bills)
    const dispatch = useDispatch()
 
    return (<div className="flex justify-center mt-5 ">
        <div className="px-24 w-100% flex flex-col gap-4">
        <div className=" text-center ">
            <input value={bills.searchStr} type="text" onChange={(event) => dispatch(onChangeSearchStr(event.target.value))} placeholder="Search" className="bg-blue-200 w-45% outline-none rounded-2xl px-2 py-1  "/>
        </div>

        {(bills.searchList.map((item) => <BillsCard key={item.id} item = {item} />)) }
        </div>
    </div>)
}