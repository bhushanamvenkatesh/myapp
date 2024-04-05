import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo,deleteTodo,done} from './todosSlice'

function Todos() {
    let [newtodo,setNewTodo]=React.useState("")
    var {todoArr}=useSelector(state=>state.todos)
    // console.log(todosArr)
    let dispatch=useDispatch()
    const newTodo=(e)=>{
        setNewTodo(e.target.value)

    }
    const addNewTodo=()=>{
        dispatch(addTodo(newtodo))
    }
  return (
    <div>
        <h1>Todos</h1>
        <input type="text" onChange={(e)=>newTodo(e)}/>
        <button onClick={addNewTodo}>add Todo</button>
        <ul>
           {
            todoArr.length>0 && todoArr.map((each)=>{
                return <li>
                    {each.title} 
                    <button onClick={()=>dispatch(deleteTodo(each.title))}>Delete</button>
                    {!each.status&& <button onClick={()=>dispatch(done(each.title))}>Done</button>}
                    {each.status&& <button onClick={()=>dispatch(done(each.title))}>Undo</button>}
                    

                    </li>
            })
           }
        </ul>
    </div>
  )
}

export default Todos