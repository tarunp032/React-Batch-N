import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slice/CounterSlice'   

export default function ACounter() {   
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log("Count:", count)

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
