const reducer = (state='', action)=>{

    if(action.type==='Login'){
     return state = action.payload
    
    } else {
        return state;
    }
    }
    
    export default reducer;