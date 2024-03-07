import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset } from './counterSlice'

function Counter() {
    const {count}=useSelector((state=>state.counter))
   
    const dispatch=useDispatch()
    // console.log(increment)
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
       
    </div>
  )
}

export default Counter