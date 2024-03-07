const initialState={
    todosArr:['hello','hi','good morning']
}

const todosReducer=function(state=initialState,action){
    if(action.type==='ADD'){
        return {...state,todosArr:[...state.todosArr,action.payload]}
    }
    if(action.type==='DEL'){
        return {...state,todosArr:[...state.todosArr.filter((e,i)=>i!==action.payload)]}
    }
    return state
}

export default todosReducer