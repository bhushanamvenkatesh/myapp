import { combineReducers } from "redux";
import fomrReducer from "./form.Reduce";
import cartReducer from "./cartitem.Reducer";

const reducer=combineReducers({
    userFormData:fomrReducer,
    cartData:cartReducer
})
export default reducer