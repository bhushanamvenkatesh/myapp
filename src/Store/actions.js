import {INC,DEC,RES,ADD,DEL} from './actionTypes'

export const incrementCounter=()=>({type:INC})
export const decrementCounter=()=>({type:DEC})
export const resetCounter=()=>({type:RES})
export const addTodoItem=(t)=>({type:ADD,payload:t})
export const deleteTodoItem=(ind)=>({type:DEL,payload:ind})
