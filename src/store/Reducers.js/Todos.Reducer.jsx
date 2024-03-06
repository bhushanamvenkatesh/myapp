const initialValues={
    todosArr:[
        {
            title:'html',
            status:false
        }
    ]
}

const todosReducer=function(state=initialValues,action){
    if(action.type==='ADD'){
        let newTodo={
            title:action.payload,
            status:false
        }

        return {...state,todosArr:[...state.todosArr,newTodo]}
    }
    if(action.type==='DEL'){
        return {...state,todosArr:[...state.todosArr.filter((each,i)=>i!==action.payload)]}
    }
    return state
}

export default todosReducer