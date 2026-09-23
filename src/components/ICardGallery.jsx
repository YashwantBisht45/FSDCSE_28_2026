import React from 'react'
import Card from './Card'
function ICardGallery() {


    const student = [
      {
        img :"https://tse2.mm.bing.net/th/id/OIP.HURySut8kteWewpmsN_5TwHaEK?r=0&pid=Api&h=220&P=0",
        roll:"307",
        name:"Nikola Tesla",
        branch:"Electrical Engineering",
        college:"Boston University",
      },
      {
        img :"https://tse2.mm.bing.net/th/id/OIP.HURySut8kteWewpmsN_5TwHaEK?r=0&pid=Api&h=220&P=0",
        roll:"308",
        name:"Albert Einstein",
        branch:"Electrical Engineering",
        college:"Boston University",
      },
      {
        img :"https://tse2.mm.bing.net/th/id/OIP.HURySut8kteWewpmsN_5TwHaEK?r=0&pid=Api&h=220&P=0",
        roll:"307",
        name:"Oppenheimer",
        branch:"Electrical Engineering",
        college:"Boston University",
      },
      {
        img :"https://tse2.mm.bing.net/th/id/OIP.HURySut8kteWewpmsN_5TwHaEK?r=0&pid=Api&h=220&P=0",
        roll:"307",
        name:"Boltzmann",
        branch:"Electrical Engineering",
        college:"Boston University",
      }
  ]

  return (
    <div style={{display:"flex" , justifyContent:"space-evenly", border: "solid black 2px"}}>
      {/* <Card data = {student1}/>
      <Card data = {student1}/>
      <Card data = {student1}/> */}

      {student.map((el) => (
        <Card data = {ele}></Card>
      ))
      }

    </div>
  )
}

export default ICardGallery
