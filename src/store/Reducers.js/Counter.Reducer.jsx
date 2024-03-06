const initialValues={
    count:0
}

const counterReducer=function(state=initialValues,action){
    if(action.type==='INC'){
        return {...state,count:state.count+1}
    }
    if(action.type==='DEC'){
        return {...state,count:state.count-1}
    }
    if(action.type==='RES'){
        return {...state,count:initialValues.count}
    }
    return state
}


export default counterReducer