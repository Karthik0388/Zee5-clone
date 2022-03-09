import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

let rootReducer = combineReducers({ AuthReducer });

export default rootReducer;
