import React from "react";

 
import  './Nav.css'
import { Link } from "react-router-dom";



const Footer = () => {
  const d=new Date()
  return (

     <> 

    
        <div class='container-fulid' style={{backgroundColor:'whitesmoke', marginTop:'5%'}}>
  <div class="row pt-3">

   <div class='col col-sd-12' style={{paddingLeft:'50px'}}>
    <h1>BOOCAH</h1>  <p style={{ fontSize:'11px',paddingBottom:'10px',fontWeight:'bold'}}>CHILD CARE EXPERT</p>
     
    <div>
    <p style={{width:'300px'}}>Velit id auctor sed quam mattis elit faucibus imperdiet duis non ultrices nibh egestas in auctor.</p>
   </div>
   </div>
 
   
     <div class="col col-sd-12" style={{paddingLeft:'50px'}}>
    <h3>By Age</h3>
<p  style={{ height:'5%',marginTop:'10%'}}>  <Link style={{textDecoration:'none'}} to='/'>Sensory Play </Link></p>
<p  style={{ height:'5%'}}>  <Link style={{textDecoration:'none'}} to='/'>Babies </Link></p>
<p  style={{ height:'5%'}}>  <Link style={{textDecoration:'none'}} to='/'>Toddlers </Link></p>
<p  style={{ height:'5%'}}>  <Link style={{textDecoration:'none'}} to='/'>Preschools </Link> </p>
<p  style={{ height:'5%'}}>  <Link style={{textDecoration:'none'}} to='/'>Foundation </Link></p>
   </div>

    <div class="col col-sd-12" style={{paddingLeft:'5px'}}>
    <h3>Play</h3>
<p  style={{ height:'5%',marginTop:'10%'}}>  <Link style={{textDecoration:'none'}} to='/'>Sensory Play</Link> </p>
<p  style={{ height:'5%'}}>  <Link style={{textDecoration:'none'}} to='/'>Dramatic Play</Link></p>
<p  style={{ height:'5%'}}>  <Link style={{textDecoration:'none'}} to='/'>Small World Play</Link></p>
<p  style={{ height:'5%'}}>  <Link style={{textDecoration:'none'}} to='/'>Play Spaces</Link></p>
<p  style={{ height:'5%'}}>  <Link style={{textDecoration:'none'}} to='/'>Fine Motor </Link></p>
    
    </div>
    <div class="col col-sd-12" style={{paddingLeft:'5px'}}>
     <h3> Subject Areas</h3>
<p style={{ height:'5%',marginTop:'10%'}}>  <Link style={{textDecoration:'none'}} to='/'>Literacy</Link></p>
<p  style={{ height:'5%'}}> <Link style={{textDecoration:'none'}} to='/'>Numeracy</Link>  </p>
<p  style={{ height:'5%'}}> <Link style={{textDecoration:'none'}} to='/'>Science</Link> </p>
<p  style={{ height:'5%'}}> <Link style={{textDecoration:'none'}} to='/'>Geography</Link> </p>
<p  style={{ height:'5%'}}> <Link style={{textDecoration:'none'}} to='/'>Health and Wellbeing</Link> </p>
    </div>
  
</div>

<div className="row mt-5" >
<div className="col-sm-12 col-md-10">
  <p >Copyrights @ {d.getFullYear()} Child Care Blog</p>
</div>
<div className="col-sm-12 col-md-2">
  <p  >Powered by Child Care Blog</p>
</div>
</div>
</div>


 

  {/* <div class="container mt-4">
    <h2 class="mb-4">Responsive Layout Example (sm & md)</h2>
    
    <div class="row">
      <div class="col-sm-12 col-md-6 bg-primary text-white p-3 mb-3">
        Column 1 <br/> 
        ✅ Full width on *small (sm)* <br/> 
        ✅ 50% width on *medium (md)*
      </div>
      
      <div class="col-sm-12 col-md-6 bg-success text-white p-3 mb-3">
        Column 2 <br/> 
        ✅ Full width on *small (sm)* <br/> 
        ✅ 50% width on *medium (md)*
      </div>
    </div>

  </div> */}

  
 

</>
        
        
      
    
      
     
  )
}

export default Footer
