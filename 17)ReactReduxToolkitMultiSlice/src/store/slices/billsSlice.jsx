import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchStr:"",
    dataList:[],
    searchList:[]
}

const billsSlice = createSlice({
    name:"billsSlice",
    initialState,
    reducers:{
        onChangeSearchStr:(state,action) => {
            state.searchStr = action.payload
            console.log(action.payload);
            if(action.payload !== ""){
                state.searchList = state.dataList.filter((item) => {
                    return item.title.includes(action.payload)
                })
            }else{
                state.searchList = state.dataList
            }
        },
        addBill : (state , action) => {
            state.dataList.push(action.payload)
            state.searchList=state.dataList
        },
        deleteBill : (state , action) => {
            console.log(action.payload);
            state.dataList = state.dataList.filter((item) => {
                return item.id !== action.payload
            })
            state.searchList = state.dataList
            if(state.searchStr !== ""){
                state.searchList = state.dataList.filter((item) => {
                    return item.title.includes(state.searchStr)
                })
            }
        }
    }
})

export const { addBill ,deleteBill , onChangeSearchStr } = billsSlice.actions
export default billsSlice.reducer