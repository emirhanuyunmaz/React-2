import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./apis/usersApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumApi } from "./apis/albumApi";
import { photosApi } from "./apis/photosApi";


export const store = configureStore({
    reducer:{
        [usersApi.reducerPath] : usersApi.reducer,
        [albumApi.reducerPath] : albumApi.reducer,
        [photosApi.reducerPath] : photosApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware).concat(albumApi.middleware).concat(photosApi.middleware)
})

setupListeners(store.dispatch)