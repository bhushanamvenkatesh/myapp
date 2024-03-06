import { combineReducers } from "redux";
import todosReducer from "./Todos.Reducer";
import counterReducer from "./Counter.Reducer";

const reducer=combineReducers({
    todos:todosReducer,
    counter:counterReducer
})

export default reducer