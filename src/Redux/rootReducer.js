import { combineReducers } from "redux";
import blogReducer from "./Reducers/blogReducer";
import counterReducer from "./Reducers/counteReducer";


const rootReducer = combineReducers({
    posts:blogReducer,
    count:counterReducer
   
    
  });
  export default rootReducer
  