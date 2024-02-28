const initialState = {
    todosArr: [
        {
            title: 'react-redux',
            status: false
        }],
    filteredArr: []
}

const TodosReducer = function (state = initialState, action) {
    state.filteredArr = [...state.todosArr]
    if (action.type === 'ADDTODO') {
        
        let td = [...state.todosArr, { title: action.payload, status: false }]
        state.filteredArr = [...state.todosArr]
        console.log(state)
        return { ...state }
        // filteredArr:[...state.todosArr,{title:action.payload,status:false}]

    }
    if (action.type === 'DELETE') {
        return { ...state, todosArr: [...state.todosArr.filter((t, i) => i !== action.payload)] }
    }

    if (action.type === 'DONE') {
        let temp = [...state.todosArr]
        temp[action.payload].status = true
        return { ...state, todosArr: [...temp] }
    }

    if (action.type === 'UNDO') {
        let temp = [...state.todosArr]
        temp[action.payload].status = false
        return { ...state, todosArr: [...temp] }
    }

    if (action.type === 'ALL') {
        state.filteredArr = { ...state.todosArr }
        return { ...state }

    }
    if (action.type === 'COMPLETED') {
        state.filteredArr = [...state.todosArr.filter((each) => each.status)]
        return { ...state }
    }

    if (action.type === 'PENDING') {
        state.filteredArr = [...state.todosArr.filter((each) => !each.status)]
        return { ...state }
    }
    return state
}

export default TodosReducer