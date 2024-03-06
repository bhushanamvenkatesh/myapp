import React from 'react'
import { connect } from 'react-redux'
function Counter(props) {
    // console.log(props)
    function inc(){
        props.dispatch({type:'INC'})
    }
    function dec(){
        props.dispatch({type:'DEC'})
    }
    function res(){
        props.dispatch({type:'RES'})
    }
  return (

    <div>
        <h1>Couter:{props.counter.count}</h1>
      
       
        <button onClick={dec}>Dec</button> &nbsp;
        <button onClick={res}>Res</button>  &nbsp;
        <button onClick={inc}>Inc</button> &nbsp;
    </div>
  )
}

export default connect(store=>store)(Counter)