import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todosList:['hello','hi','how are you']
}


const todosSlice=createSlice({
    name:todos,
    initialState,
    reducers:{
        ADD:(state,action)=>state.todosList.push(action.payload),
        DELETE:(state,action)=>state.todosList.splice(action.payload,1)
    }

})

export const {ADD,DELETE}=todosSlice.actions
export default todosSlice.reducer