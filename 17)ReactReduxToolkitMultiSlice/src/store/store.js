import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice"
import billsSlice from "./slices/billsSlice";

export default configureStore({
    reducer:{
        forms : formSlice,
        bills : billsSlice
    }
})