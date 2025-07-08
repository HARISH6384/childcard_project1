import React, { useState } from 'react'
import child3 from '../image/child 3.jpg'
import  './Contact.css'
import { Link } from 'react-router-dom'

const Babies = () => {
   const[email,setEmail]=useState('');
       const handleSumbit = (e) => {
        e.preventDefault();
          
        
       }
       function click(){
        alert(`Email: ${email}`)
       }
    
  return (
    <>
    <div style={{backgroundColor:'whitesmoke'}}>
    <div class='container'>
        <div class='row'>
            <div class='col'>
                 <div className='blog'> 
        <h1 style={{marginTop:'10%' ,marginLeft:'5%',fontFamily:'initial'}}>Sensory play</h1>
        <br></br>
         
       
        <hr></hr>
        <div className='blog'>
            <h1  style={{marginTop:'7%',fontFamily:'initial' }}>How to improve venenatis ultrices nulla</h1>
            <img style={{marginTop:'7%' }} src={child3}/>
            <p style={{marginTop:'3%' ,fontFamily:'sans-serif'}}>Mi vel morbi tristique adipiscing magna tristique porttitor quis vel elementum amet commodo diam hendrerit odio sit cras vel vel arcu semper tellus sapien morbi sit iaculis amet mauris tellus velit donec ipsum rhoncus fusce in volutpat congue quis pharetra. Donec molestie enim vitae id tempus etiam malesuada consectetur eget aenean purus lacus, nunc ipsum</p>
            <hr></hr>

        </div>

      
    </div>


            </div>
            
                   <div class='col ms-5' >
                                          <div style={{ borderLeft:'1px solid black' ,height:'910px' }}>
                                   
                               <ul>
                                <li style={{marginTop:'39%', }}>Recent post</li>
                                <li> <Link style={{textDecoration:'none'}} to='/Taste-safe sensory nulla dignissim'   >Taste-safe sensory nulla dignissim</Link></li>
                                <li> <Link style={{textDecoration:'none'}}  to='/Taste-safe sensory nulla dignissim'   >Taste-safe sensory nulla dignissim</Link></li>
                                <li> <Link style={{textDecoration:'none'}}  to='/ Exploring the duis lacus turpis faucibus'   >Exploring the duis lacus turpis faucibus</Link></li>
                  
                                   </ul>
                                    <br></br>
                  
                                    <ul >
                                <li style={{marginTop:'39%', }}>Recent post</li>
                                <li> <Link style={{textDecoration:'none'}} to='/Babies'   >Babies</Link></li>
                                <li> <Link style={{textDecoration:'none'}} to='/Play Spaces'   >Play Spaces</Link></li>
                                <li> <Link  style={{textDecoration:'none'}} to='/Preschools'   >Preschools</Link></li>
                                <li> <Link style={{textDecoration:'none'}} to='/Science'   >Science</Link></li>
                                <li> <Link style={{textDecoration:'none'}} to='/Sensory Play'   >Sensory Play</Link></li>
                                <li> <Link style={{textDecoration:'none'}}  to='/Toddlers'   >Toddlers</Link></li>
                                </ul>
                  
                  
                  
                  
                  
                                     </div>



                
            </div>

        </div>

    </div>
    <div  class='container' id='letter' >
      <div class='row'>
        <div class='col ' id='form1'>
          <h1 style={{fontFamily:'revert-layer'}}>Subscribe to Our Newsletter</h1>
          <p style={{width:'500px', marginLeft:'300px', marginTop:'1%',fontFamily:'sans-serif'}}>Aenean massa feugiat imperdiet a scelerisque et morbi tempus massa tincidunt vitae libero aenean tincidunt molestie.</p>
         <form  onSubmit={handleSumbit}> <input type='email'  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='EMAIL'  style={{width:'35%', height:'45px', marginTop:'5%',borderRadius:'7px'}}/> <button  type='sumbit' onClick={click} style={{width:'15%', height:'40px', borderRadius:'7px'}}>Subscribe</button></form>
        </div>
 
      </div>


    </div>
    </div>
   
    </>
  )
}

export default Babies
