import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease } from './../../Redux/Actions/counterAcutions';

const Counter = () => {
    const count=useSelector((state)=>state.count)
    console.log(count)
    const dispatch=useDispatch()

  return (
    <div>
   
      <button onClick={()=>dispatch(increase())}>Increase</button>
      <button onClick={()=>dispatch(decrease())}>Decrease</button>
    </div>
  )
}

export default Counter
