import React from 'react'
import { useState } from 'react'

export default function StateHandling() {
  
  const [count, setCount] = useState(100);
  
  function increment(){
    setCount(count+20);
  }
  function decrement(){
    setCount(count-20);
  }
    return (

    <div>
      <h1>State Handling</h1>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increase Count</button>
      <br /><br />
      <button onClick={decrement}>Decrease Count</button>
    </div>
  )
}
