import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const albumApi = createApi({
    reducerPath:"albumApi",
    baseQuery : fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    tagTypes : ["Albums"],
    endpoints : (builder) => ({
        getUserAlbum : builder.query({
            query : (userID) => `/albums/${userID}`,
            providesTags:[{type:"Albums"}]
        }),

        addUserAlbum: builder.mutation({
            
            query:(userID) => ({
                url:`/albums`,
                params:{
                    userID
                },
                method:"POST",
                body:{
                    name:faker.internet.displayName(),
                    userID
                },
            }),
            invalidatesTags:["Albums"]
        })
    })
})

export const {useGetUserAlbumQuery , useAddUserAlbumMutation} = albumApi