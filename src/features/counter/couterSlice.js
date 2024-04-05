import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0
}

const counterSlice = createSlice({

    name: 'c',
    initialState,
    reducers: {
        inc: (state,action)=>{
            state.count=state.count+1
        },
        dec: (state,action)=>{
            state.count=state.count-1
        },
        res: (state,action)=>{
            state.count=initialState.count
        }
    }


})

export var {inc,dec,res}=counterSlice.actions
export default counterSlice.reducer