import React, { useState } from 'react'
import './Contact.js'
import child1 from '../image/child.jpg'
import child2 from '../image/child 2.jpg'
import child3 from '../image/child 3.jpg'
import { Link } from 'react-router-dom'

const Blog = () => {

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
        <h1 style={{marginTop:'10%',fontFamily:'initial' }}>Taste-safe sensory nulla dignissim</h1>
        <div   className='blog'> 
            <img style={{marginTop:'7%' }} src={child1}/>
            <p style={{marginTop:'3%' ,fontFamily:'sans-serif'}}>Consectetur enim viverra etiam semper interdum amet faucibus gravida bibendum nisl orci adipiscing ut in tristique diam bibendum turpis in nec nisi amet, ac sit adipiscing egestas gravida accumsan elit id viverra dolor volutpat mauris tortor odio diam nam sit et, sed in amet ultrices libero, posuere aliquet semper adipiscing turpis hendrerit id interdum elementum. […]</p>
            
        </div>
        <hr></hr>
        <div className='blog'>
            <h1 style={{marginTop:'7%',fontFamily:'initial' }}>Exploring the duis lacus turpis faucibus</h1>
            <img style={{marginTop:'7%' }} src={child2}/>
            <p style={{marginTop:'3%' ,fontFamily:'sans-serif'}}>Ultrices ipsum tempor eget lectus etiam at vitae risus arcu malesuada ullamcorper urna faucibus egestas viverra faucibus sed mattis eu, faucibus velit nunc est felis, morbi orci, tristique convallis amet malesuada massa vitae tortor eu sed sit est orci semper. Diam morbi hendrerit congue tortor sociis lacus libero mauris, viverra massa morbi adipiscing nulla montes,Exploring the duis lacus turpis faucibusRead More »</p>
        </div>
        <hr></hr>
        <div className='blog'>
            <h1  style={{marginTop:'7%',fontFamily:'initial' }}>How to improve venenatis ultrices nulla</h1>
            <img style={{marginTop:'7%' }} src={child3}/>
            <p style={{marginTop:'3%',fontFamily:'sans-serif' }}>Mi vel morbi tristique adipiscing magna tristique porttitor quis vel elementum amet commodo diam hendrerit odio sit cras vel vel arcu semper tellus sapien morbi sit iaculis amet mauris tellus velit donec ipsum rhoncus fusce in volutpat congue quis pharetra. Donec molestie enim vitae id tempus etiam malesuada consectetur eget aenean purus lacus, nunc ipsum</p>

        </div>

      
    </div>


            </div>
            
                 
                    <div class='col ms-5' >
                        <div style={{ borderLeft:'1px solid black' ,height:'2420px' }}>
                 
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
         <form  onSubmit={handleSumbit}> <input type='email'  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='EMAIL'  style={{width:'35%', height:'45px', marginTop:'5%',borderRadius:'7px'}}/> <button    type='sumbit' onClick={click} style={{width:'15%', height:'40px', borderRadius:'7px'}}>Subscribe</button></form>
        </div>
 
      </div>


    </div>
    </div>
   
    </>
  )
}

export default Blog
