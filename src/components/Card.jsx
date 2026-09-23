

const Card = (props) => {
  return (
    <div style={{border:'2px solid green',height:'500px',weigth:'100px'}}>
      <h5 style={{color:'red'}}>ABES Student ID Card</h5>
      
      <img src={props.img} alt="" height={'200px'} weigth={'220px'}/>

      <h2>Roll No: {props.data.roll}</h2>
      <h2>Name: {props.data.name}</h2>
      <h2>Branch: {props.data.branch}</h2>
      <h2>College: {props.college}</h2>

    </div> 
  )
}

export default Card
