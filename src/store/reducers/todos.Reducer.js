const initialVallues = {
    todosArr: [
        {
            title: 'learn html',
            status: false
        }
    ],
    filteredTodos: [],
    currfilter: 'ALL'
}

const todosReducer = function (state = initialVallues, action) {

    state.filteredTodos = [...state.todosArr]
    if (action.type === 'ADDTODO') {
        state.todosArr = [...state.todosArr, { title: action.payload, status: false }]
        if (state.currfilter === 'ALL') {
            return {
                ...state, filteredTodos: [...state.todosArr]
            }
        }
        if (state.currfilter === 'COMPLETED') {
            return { ...state, filteredTodos: [...state.todosArr.filter((e) => e.status)] }
        }
        if (state.currfilter === 'PENDING') {
            return { ...state, filteredTodos: [...state.todosArr.filter((e) => !e.status)] }

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
        state.currfilter = 'ALL'
        console.log('in reducer', state)
        return { ...state, filteredTodos: [...state.todosArr] }
    }

    if (action.type === 'COMPLETED') {
        state.currfilter = 'COMPLETED'
        return { ...state, filteredTodos: [...state.todosArr.filter((e) => e.status)] }
    }

    if (action.type === 'PENDING') {
        state.currfilter = 'PENDING'
        return { ...state, filteredTodos: [...state.todosArr.filter((e) => !e.status)] }

    }
    return state



}

export default todosReducer