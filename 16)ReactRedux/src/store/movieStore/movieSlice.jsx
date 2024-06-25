import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

 const initialState = {
    dataList:[],
    isLoading:true,
    isError:false,
}

//Asenkron bir işlem yapılacaksa kullanılacak fonk.
export const getPosts = createAsyncThunk("movie/getPosts",
    async () =>{
        const apiKey = import.meta.env.VITE_API_KEY
        const res = await axios(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
        const data = await res.data
        return data 
    }
)

 const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{},
    //Async fonk işlemleri tamamlanınca yapılacak işlemler
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending , (state , action ) => {
            state.isLoading = true
        })
        .addCase(getPosts.fulfilled , (state , action ) =>{
            state.dataList = []
            state.dataList = state.dataList.concat(action.payload)
            state.isLoading = false
            state.isError = false
        })
        .addCase(getPosts.rejected , (state , action ) => {
            state.isError = true
            state.isLoading= false
            state.dataList = []
        })
    }
})

export default movieSlice.reducer   
