const initialValue={
    userDetails:{
        uname:'venkat',
        password:'12345',
       

    },
    isUserValid:false
}

const fomrReducer=function(state=initialValue,action){
    // console.log(action)
 if(action.type==='LOGIN' && action.payload.uname===state.userDetails.uname && action.payload.password){
    state.isUserValid=true
    return state
 }
   
    return state 
}
export default fomrReducer