import counterReducer from "./CounterReducer";
import todosReducer from "./TodosReducer";
import { combineReducers } from "redux";

let reducer=combineReducers(
    {todosList:todosReducer,
        counter:counterReducer})

export default reducer