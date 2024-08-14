const reducer = (state='', action)=>{

    if(action.type==='getUrl'){
     return state = action.payload
    
    } else {
        return state;
    }
    }
    
    export default reducer;