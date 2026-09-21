

const Card = ({data}) => {
  return (
    <div style={{border:'2px solid green',height:'500px',weigth:'100px'}}>
      <h5 style={{color:'red'}}>ABES Student ID Card</h5>
      
      <img src={data.img} alt="" height={'200px'} weigth={'220px'}/>

      <h2>Roll No: {data.roll}</h2>
      <h2>Name: {data.name}</h2>
      <h2>Branch: {data.branch}</h2>
      <h2>College: {data.college}</h2>

    </div> 
  )
}

export default Card
