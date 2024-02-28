const initialState={
    todosList:['learn html','learn js']
}

const todosReducer=function(state=initialState,action){
    if(action.type==='ADD'){
        return {...state,todosList:state.todosList.push(action.payload)}
    }

    return state
}

export default todosReducer