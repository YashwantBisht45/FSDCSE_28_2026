import React from 'react'
import Card from './Card'
function ICardGallery() {


    const student1 = {
        img :"https://tse2.mm.bing.net/th/id/OIP.HURySut8kteWewpmsN_5TwHaEK?r=0&pid=Api&h=220&P=0",
        roll:"307",
        name:"Nikola Tesla",
        branch:"Electrical Engineering",
        college:"Boston University",
    }

  return (
    <div style={{display:"flex" , justifyContent:"space-evenly"}}>

      <Card data = {student1}/>
      <Card data = {student1}/>
      <Card data = {student1}/>

    </div>
  )
}

export default ICardGallery
