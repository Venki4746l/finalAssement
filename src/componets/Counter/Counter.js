import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease } from './../../Redux/Actions/counterAcutions'
import './counter.css'

const Counter = () => {
    const count=useSelector((state)=>state.count.count)
    console.log(count)
    const dispatch=useDispatch()

  return (
    <center className="counter-container">
      <h2 className="counter-value">Counter: {count}</h2>
      <div className="counter-buttons">
        <button className="counter-button" onClick={()=>dispatch(increase())}>Increment</button>
        <button className="counter-button" onClick={()=>dispatch(decrease())}>Decrement</button>
      </div>
    </center>
  )
}

export default Counter
