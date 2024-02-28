import { createStore } from "redux";
import reducer from './reducers/reducer.js'
const store= new createStore(reducer)

export default store