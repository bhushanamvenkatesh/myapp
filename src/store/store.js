import { createStore } from "redux";
import reducer from './reducers/todos.Reducer'

const store=createStore(reducer)
export default store