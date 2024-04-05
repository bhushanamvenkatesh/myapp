import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {inc,dec,res} from './couterSlice'


function Counter() {
  var {count} = useSelector((state)=>{return state.c})
  var dispatch=useDispatch()
  console.log(dispatch)
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>dispatch(dec())}>dec</button>
        <button onClick={()=>dispatch(res())}>res</button>
        <button onClick={()=>dispatch(inc())}>Inc</button>
    </div>
  )
}

export default Counter