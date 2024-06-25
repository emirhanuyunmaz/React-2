import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name : "todo",
    initialState:{
        todoList:[]
    },
    reducers:{
        addTodo : (state,action) => {
            state.todoList.push(action.payload)
        },
        removeTodo : (state , action ) => {
            const updatedList = state.todoList.filter((item) => {
                return item !== action.payload
            })
            state.todoList = updatedList
        }
    }
})

export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer