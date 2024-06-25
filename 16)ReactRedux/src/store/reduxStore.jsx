import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieStore/movieSlice";

export const store = configureStore({
    reducer:{
        movie:movieSlice
    }
})