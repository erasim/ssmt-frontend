 import { combineReducers } from "redux";
 import amountReduser from "./amountReduser";
 import loginReduser from "./loginReduser"

 const reducers = combineReducers({

    amount : amountReduser,
    user : loginReduser
    
 })

 export default reducers;