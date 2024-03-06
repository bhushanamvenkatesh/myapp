import React from 'react'
import { connect } from 'react-redux'
import {addNewTodo,deleteTodo} from './store/actions'

function Todos(props) {
    console.log(props)
    let [todoItem, setItem] = React.useState('')
    const addTodo = () => {
        props.handleNewtodo(todoItem)
    }
    const del = (i) => {
        props.handleDelete(i)
    }
    return (
        <div>
            <h1>Todos list</h1>

            <input type="text" onChange={(e) => setItem(e.target.value)} /> &nbsp; <button onClick={() => addTodo()}>add todo</button>
            {
                props.todosArr.map((todo, i) => <li>{todo.title} &nbsp; <button onClick={() => del(i)}>Del</button></li>)
            }
        </div>
    )
}

function mapStoreToProps(store) {
    return store.todos
}
function mapDispatchToProps(dispatch) {
    return {
        handleNewtodo: (s) => dispatch(addNewTodo(s)),
        handleDelete:(ind)=>dispatch(deleteTodo(ind))
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Todos)