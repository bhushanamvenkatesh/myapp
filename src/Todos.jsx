import { file } from "@babel/types";
import React from "react";
import { connect } from "react-redux";


function Todos({ filteredTodos,todosArr, currfilter,dispatch }) {
    let [newTodo, setTodo] = React.useState(null)
    let iref=React.useRef()
    React.useEffect(()=>{
        iref.current.checked=true
    },[])
   
    function updateState(e) {
        setTodo(e.target.value)

    }


    function updatefilter(e){
        console.log("component",e.target.value)
        dispatch({type:e.target.value})
    }
    // console.log(currfilter,filteredTodos)

    return <div className="todos-container">
        <h2>Todos List</h2>
        <input type="text" onChange={(e) => updateState(e)} />
        <button onClick={() => dispatch({ type: 'ADDTODO', payload: newTodo })}>add todo</button>
        <br />
        <input type="radio" name='filter' value="ALL" ref={iref} onChange={(e)=>updatefilter(e)}/>:All &nbsp;
        <input type="radio" name='filter' value="COMPLETED" onChange={(e)=>updatefilter(e)} />:Completed &nbsp;
        <input type="radio" name='filter' value="PENDING" onChange={(e)=>updatefilter(e)} />:Pending &nbsp;

    <div className="list-items">    
        {
            filteredTodos.map((each) =>
                <div><span className={`${'todo'} ${each.status && 'strike'} ` }>{each.title}</span>
                    <button onClick={() => dispatch({ type: 'DEL', payload: each.title })}>Del</button>
                    <button onClick={() => dispatch({ type: 'DONE', payload: each.title })}>Done</button>
                    <button onClick={() => dispatch({ type: 'UNDO', payload: each.title })}>Undo</button>
                </div>
            )
        }
        </div>
    </div>
}

export default connect(store => store)(Todos)