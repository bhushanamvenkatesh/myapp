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
   
    if (action.type === 'ADDTODO') {
        console.log('afa')
        return { ...state, todosArr: [...state.todosArr, { title: action.payload, status: false }],
     }
    }
    if (action.type === 'DEL') {

        return { ...state, todosArr: [...state.todosArr.filter((each) => each.title !== action.payload)] }
    }
    if (action.type === 'DONE') {
        return {
            ...state, todosArr: [...state.todosArr.map((each) => {
                if (each.title === action.payload) {
                    each.status = true
                }
                return each
            })]
        }
    }
    if (action.type === 'UNDO') {
        return {
            ...state, todosArr: [...state.todosArr.map((each) => {
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