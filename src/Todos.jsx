import React from "react";
import { connect } from "react-redux";


function Todos({ filteredTodos,todosArr, dispatch }) {
    let [newTodo, setTodo] = React.useState(null)
    function updateState(e) {
        setTodo(e.target.value)

    }
    console.log(filteredTodos)

    return <div className="todos-container">
        <h2>Todos List</h2>
        <input type="text" onChange={(e) => updateState(e)} />
        <button onClick={() => dispatch({ type: 'ADDTODO', payload: newTodo })}>add todo</button>
        <br />
        <input type="radio" name='filter' value="ALL" onChange={(e)=>dispatch({type:e.target.value})}/>:All &nbsp;
        <input type="radio" name='filter' value="COMPLETED" onChange={(e)=>dispatch({type:e.target.value})} />:Completed &nbsp;
        <input type="radio" name='filter' value="PENDING" onChange={(e)=>dispatch({type:e.target.value})} />:Pending &nbsp;


        {
            todosArr.map((each) =>
                <li><span className={`${'todo'} ${each.status && 'strike'} ` }>{each.title}</span>
                    <button onClick={() => dispatch({ type: 'DEL', payload: each.title })}>Del</button>
                    <button onClick={() => dispatch({ type: 'DONE', payload: each.title })}>Done</button>
                    <button onClick={() => dispatch({ type: 'UNDO', payload: each.title })}>Undo</button>

                </li>
            )
        }
    </div>
}

export default connect(store => store)(Todos)