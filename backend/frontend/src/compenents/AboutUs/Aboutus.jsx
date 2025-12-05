import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'; // Add this import
import "./About.css"
const Aboutus = () => {
  return (
    <div style={{
      width:"100%",
      
      padding:"20px",
        backgroundImage:
          "linear-gradient(to bottom,rgb(4, 0, 32)0%,rgb(4, 0, 32)20%,rgba(47, 33, 110, 1)80%,rgba(47, 33, 110, 1)100%)",
       
    }} >
        
      <div className='container cardo' style={{
        border:"1px solid blue",
       padding:"20px",
       color:"white",
       width:'60%',
       marginTop:"20px",
       marginBottom:"20px",
       borderRadius:'12px'
      }} >
      <h1 >About <span style={{
        color:'blue',
        
        
      }}>Us</span> </h1>
      
       <hr style={{
        width:"50%",
        color:'red'
       }}></hr>

       <p>This Website Is made By a cs Student at Esi Algires 
        Named Sifi Mohamed this project is considered as a step into the world of Full Stack projects  </p>
       </div>
      <div className='container cardo' style={{
        border:"1px solid blue",
       padding:"20px",
       color:"white",
        width:'60%',
       marginTop:"20px",
       marginBottom:"20px",
       borderRadius:'12px'
      }} >
      <h1 >About The  <span style={{
        color:'blue',
        
        
      }}>Creator</span> </h1>
      
       <hr style={{
        width:"50%",
        color:'red'
       }}></hr>
       <div className='d-flex align-items-center justify-content-center  gap-2' style={{
        width:"100%",
        
       }}>
        
        <i class="bi bi-linkedin bg_hover-primary ic in "></i>
        <i class="bi bi-instagram ic insta "></i>
        <i class="bi bi-github ic github"></i>
       </div>
       
       </div>
       
    </div>
   
  )
}

export default Aboutus