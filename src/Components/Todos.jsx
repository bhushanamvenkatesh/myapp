import React from 'react'
import { connect } from 'react-redux'
import { deleteTodoItem,addTodoItem } from '../Store/actions'
function Todos(props) {
   let [newTodo,setTodo]=React.useState('')
  return (
    <div>
        <h1>Todos List</h1>
        <input type="text" onChange={(e)=>setTodo(e.target.value)} />
        <button onClick={()=>props.addNewTodo(newTodo)}>add todo</button>
        <div>
            {
                props.todosArr.length>0&&props.todosArr.map((e,i)=>{
                    return <li>
                        {e}
                        <button onClick={()=>props.delTodo(i)}>del</button>
                    </li>
                })
            }
        </div>

    </div>
  )
}

const mapStateToProps=(state)=>state.todos
const mapDispatchToprops=(dispatch)=>(
    {
        addNewTodo:(todo)=>dispatch(addTodoItem(todo)),
        delTodo:(i)=>dispatch(deleteTodoItem(i))
    }
    )

export default connect(mapStateToProps,mapDispatchToprops)(Todos)