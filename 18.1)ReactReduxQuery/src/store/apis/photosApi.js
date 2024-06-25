import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const photosApi = createApi({
    reducerPath:"photosApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    tagTypes:["Photos"],
    endpoints : (builder) =>({
        getUserPhotos: builder.query({
            query:(albumID) =>`/photos`,
            providesTags:[{type:"Photos"}]
        }),
        addUserPhotos:builder.mutation({
            query:(albumID) => ({
                url:`/photos`,
                method:"POST",
                body:{
                    photo:faker.image.url({width:150,height:150})
                }
            }),
            invalidatesTags:["Photos"]
        })
    })
})

export const {useGetUserPhotosQuery , useAddUserPhotosMutation} = photosApi