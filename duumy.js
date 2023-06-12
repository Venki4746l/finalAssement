
import { combineReducers } from "redux";
import LoginReducer from "./Reducers/LoginReducer";
import todoReducer from './Reducers/CrudREducer'
import cartReducer from "./Reducers/CartReducer";
const rootReducer = combineReducers({
  todos:todoReducer,
  login: LoginReducer,
  cartItemsdata:cartReducer
  
});
export default rootReducer
