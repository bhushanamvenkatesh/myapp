const initialVallues = {
    todosArr: [
        {
            title: 'learn html',
            status: false
        }
    ],
    filteredTodos: []
}

const todosReducer = function (state = initialVallues, action) {
   state.filteredTodos=[...state.todosArr]
    if (action.type === 'ADDTODO') {
        state.todosArr=[...state.todosArr, { title: action.payload, status: false }]
        
        return { ...state, todosArr: [...state.todosArr],filteredTodos:[...state.todosArr]
     }
    }
    if (action.type === 'DEL') {

        return { ...state, filteredTodos: [...state.todosArr.filter((each) => each.title !== action.payload)] }
    }
    if (action.type === 'DONE') {
        return {
            ...state, filteredTodos: [...state.todosArr.map((each) => {
                if (each.title === action.payload) {
                    each.status = true
                }
                return each
            })]
        }
    }
    if (action.type === 'UNDO') {
        return {
            ...state, filteredTodos: [...state.todosArr.map((each) => {
                if (each.title === action.payload) {
                    each.status = false
                }
                return each
            })]
        }
    }

    if (action.type === 'ALL') {
        return { ...state, filteredTodos: [...state.todosArr] }
    }

    if (action.type === 'COMPLETED') {
        return { ...state, filteredTodos: [...state.todosArr.filter(each => each.status)] }
    }

    if (action.type === 'PENDING') {
        return { ...state, filteredTodos: [...state.todosArr.filter(each => !each.status)] }
    }
    return state



}

export default todosReducer