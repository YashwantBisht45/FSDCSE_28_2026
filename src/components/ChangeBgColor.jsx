import React from 'react'
import { useState } from 'react'
import image from '../assets/image.png'

export default function ChangeBgColor() {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [catHeight, setCatHeight] = useState(200);
  const [catWidth, setCatWidth] = useState(200);

  const [rotate, setRotate] = useState(30);

  function changeColor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);

  }

  function EnhanceHeight(){
    setCatHeight(catHeight+10);
    setCatWidth(catWidth+10);
  }

  function imageRotate(){
      setRotate(rotate+5);
  }

  return (
    <div>
      <h2>Change BackGround Color</h2>
      
      <div style = {{backgroundColor: `rgb(${red}, ${green}, ${blue})`, border: "2px solid", height: "300px", width: "300px",marginLeft:"460px" }}>
         
        <img src={image} height = {catHeight} width = {catWidth} style={{transform: `rotate(${rotate}deg)`}}/>

      </div>
      <button onClick={changeColor} style={{marginLeft:"auto"}}>Change Color</button>
      <button onClick={EnhanceHeight}>Enhance Height</button>
      <button onClick={imageRotate}>Image Rotate</button>
      
    </div>
  )
}
