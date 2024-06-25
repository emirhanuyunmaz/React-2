import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const usersApi = createApi({
    reducerPath:"usersApi",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3000/" }),
    tagTypes : ["Users"],
    endpoints: (builder) => ({
        getUsersName : builder.query(({
            query : () => ({ url:"users"}),
            providesTags:["Users"]//Burada güncelleme işlemi yapılacaktır.
        })),

        addUserName: builder.mutation({
            query:() => ({
                url:"/users",
                method:"POST",   
                body:{
                    name : faker.internet.userName()
                },
            }),
            
            //Bu işlem sayesinde burada yapılan bir değişiklik "providesTags:["Users"]" kullanılan yerde güncelleme oluşturacaktır. 
            invalidatesTags:[{type:"Users"}]

        })
    })
})

export const {useGetUsersNameQuery , useAddUserNameMutation} = usersApi