import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todoArr:[]
}

const todosSlice=createSlice({
    name:'todoList',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            let newObj={
                title:action.payload,
                state:false
            }
            state.todoArr.push(newObj)
        },
        deleteTodo:(state,action)=>{
            state.todoArr=state.todoArr.filter((eachTodo)=>eachTodo.title!== action.payload)
        },
        done:(state,action)=>{
            state.todoArr=state.todoArr.map((eachTodo)=>{
                if(eachTodo.title===action.payload){
                    eachTodo.status=!eachTodo.status
                }
                return eachTodo
            })
        },
       
    }


})

export var {addTodo,deleteTodo,done}=todosSlice.actions
export default todosSlice.reducer