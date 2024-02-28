const initialValue={
    cartArr:[]
}

const cartReducer=function(state=initialValue,action){
    console.log(action)
    if(action.type=="ADDTOCART"){
        
        return {...state,cartArr:[...state.cartArr,action.payload]}
    }
}

export default cartReducer