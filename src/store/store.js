import { createStore } from "redux";
import reducer from "./reducers/combine.Reducer";

const store=createStore(reducer)
export default store