import { combineReducers } from "redux";
import counterReducer from './Couter.Reducer'
import todosReducer from "./Todos.Reducer";
const reducer=combineReducers({
    counter:counterReducer,
    todos:todosReducer
})

export default reducer