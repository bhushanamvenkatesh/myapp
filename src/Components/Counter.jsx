import React from 'react'
import { connect } from 'react-redux'
import {incrementCounter,decrementCounter,resetCounter} from '../Store/actions.js'
import {counterSelector} from '../Store/Selectors.js'
function Counter(props) {
    
  return (
    <div>
        <h1>Count:{props.count}</h1>
        <button onClick={props.decrement}>DEC</button> &nbsp;
        <button onClick={props.res}>RES</button> &nbsp;
        <button onClick={props.increment}>INC</button> &nbsp;

        
    </div>
  )
}

const mapStateToProps=(store)=>counterSelector(store)
const mapDispatchToProps=(dispatch)=>(
    {
        decrement:()=>dispatch(decrementCounter()),
        increment:()=>dispatch(incrementCounter()),
        res:()=>dispatch(resetCounter())
    }
    )

export default connect(mapStateToProps,mapDispatchToProps)(Counter)