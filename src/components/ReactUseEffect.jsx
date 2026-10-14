import React, { useEffect, useState,  } from 'react'


function ReactUseEffect() {
    const [counter, setCounter] = useState(0);
    const [pointer, setPointer] = useState(100);

   useEffect(() => {
    console.log("Counter"+ counter);
    console.log("Pointer"+pointer);
   }, [counter, pointer])

   function incCounter(){
    setCounter(counter+5);
   }

   function decPointer(){
    setPointer(pointer-5);
   }
  return (
    <div>
      <h1 style={{color: "red"}}>UseEffect</h1>
      <h2>Counter value = {counter}</h2>
      <button onClick={incCounter}>Increase Counter</button>
      <br />
      <br />
      <h2>Pointer = {pointer}</h2>
      <button onClick={decPointer}>Decrease Pointer</button>
    </div>
  )
}

export default ReactUseEffect
