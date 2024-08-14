 import { combineReducers } from "redux";
 import amountReduser from "./amountReduser";
 import loginReduser from "./loginReduser"
 import urlReduser from "./urlReduser"

 const reducers = combineReducers({

    amount : amountReduser,
    user : loginReduser,
    baseUrl : urlReduser
    
 })

 export default reducers;