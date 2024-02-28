import TodosReducer from "./reducers/Todos.Reducer.js";

import { createStore} from "redux";
// import { combineReducers } from "redux";

// const reducer=combineReducers({
//     todosList:TodosReducer
// })


const store=createStore(TodosReducer)

export default store