import React from 'react'
import { useState } from 'react'

export default function ChangeBgColor() {

  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  

  return (
    <div>
      <h2>Change BuckGround Color</h2>
      <div style = {{backgroundColor: `rgb(${red}, ${green}, ${blue})`, border: "2px solid", height: "200px", width: "200px"}}></div>

    </div>
  )
}
