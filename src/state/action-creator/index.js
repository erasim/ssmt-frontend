export   const depositeMoney= (amount)=>{
    return (dispatch)=>{
      dispatch({
        type:'deposit',
        payload: amount
      })


    }
}

export const withdrawMoney= (amount)=>{
    return (dispatch)=>{
      dispatch({
        type:'withdraw',
        payload: amount
      })


    }
}


export const userLogin= (user)=>{
  return (dispatch)=>{

    dispatch({
      type:'Login',
      payload: user
    })


  }
}

export const userLogout= (user)=>{
 

  return (dispatch)=>{
    dispatch({
      type:'Logout',
      payload: user
    })


  }
}