
import {ADD,DEL} from './actionsTypes.js'
export function addNewTodo(s){
    return { type: ADD, payload: s }
}

export function deleteTodo(i){
    return {type:DEL,payload:i}
}

