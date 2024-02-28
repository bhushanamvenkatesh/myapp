import React from "react";
import { connect } from "react-redux";

function Counter(props){
    // console.log(props)
    const increment=()=>props.dispatch({type:'INCREMENT'})
    const decrement=()=>props.dispatch({type:'DECREMENT'})
    const reset=()=>props.dispatch({type:'RESET'})


    return <div className="my-box">
        <h1>counter:{props.counter.count}</h1>
        <button onClick={decrement}>DEC</button>&nbsp;
        <button onClick={reset}>RES</button>&nbsp;
        <button onClick={increment}>INC</button>&nbsp;


       

    </div>
}

export default connect(function(store){return store})(Counter)