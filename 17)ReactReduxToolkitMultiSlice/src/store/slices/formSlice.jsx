import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title : "",
    description : "",
    price : ""
}

export const formSlice = createSlice({
    name:"forms",
    initialState,
    reducers:{
        changeTitle : (state , action) => {
            state.title = action.payload
        },

        changeDesc : (state , action) => {
            state.description = action.payload
        },

        changePrice : (state , action) => {
            state.price = action.payload
        }
    }
})

export const {changeTitle , changeDesc , changePrice} = formSlice.actions

export default formSlice.reducer