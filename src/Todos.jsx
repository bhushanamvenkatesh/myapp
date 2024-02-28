import React, { useState } from "react";
import { connect } from "react-redux";

function Todos({ filteredArr, dispatch }) {
    let [newTodo, setNewTodo] = useState(null)
    let [currFilter, setFilter] = useState('ALL')

    console.log(filteredArr)
    React.useEffect(()=>{
        console.log(filteredArr)
    },[filteredArr])
    function addTodo(e) {
        setNewTodo(e.target.value)
    }
    function completed(e){
        setFilter(e.target.value)
        dispatch({type:e.target.value})

    }

    function dispatchTodo() {
        dispatch({ type: 'ADDTODO', payload: newTodo })
        // dispatch({ type: currFilter})

    }

    return <div>
        <input type="text" onChange={(e) => addTodo(e)} />
        <button onClick={() => dispatchTodo()}>add todo</button>

        <br />
        <input type="radio" name='filtered' value='ALL' checked onChange={(e)=>dispatch({type:e.target.value})}/>:ALL &nbsp;
        <input type="radio" name='filtered' value='COMPLETED' onChange={(e)=>completed(e)}/>:Completed &nbsp;
        <input type="radio" name='filtered' value='PENDING'onChange={(e)=>dispatch({type:e.target.value})} />:Pending &nbsp;

        {
            filteredArr.map((todo,ind) => <li>
                <span className={todo.status && 'strike'}>{todo.title}</span>
                <button onClick={() => dispatch({type:'DELETE',payload: ind})}>Del</button>
                <button onClick={() => dispatch({type:'DONE',payload: ind})}>Done</button>
                <button onClick={() => dispatch({type:'UNDO',payload: ind})}>Undo</button>
            </li>)
        }
    </div>
}

export default connect(store => store)(Todos)