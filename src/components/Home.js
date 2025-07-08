import React, { useState } from 'react'
import './Nav.css'
import photo from '../image/hand-drawn-asian-family-illustration.png'
import pati from '../image/child-care-template-center-director-img.jpg'
import card1 from '../image/caca.jpg'
import card2 from '../image/caca2.jpg'
import card3 from '../image/caca3.jpg'
import child1 from '../image/kozhatha.jpg'
import child2 from '../image/k2.jpg'
import child3 from '../image/child-care-template-topics-img-2.jpg'
import child4 from '../image/k3.jpg'
import kutty1 from '../image/kutty.jpg'
import kutty2 from '../image/kutty2.jpg'
import kutty3 from '../image/kutty3.jpg'
import meet1 from '../image/meet.jpg'
import meet2 from '../image/meet2.jpg'
import meet3 from '../image/meet3.jpg'
import { Link } from 'react-router-dom'
 


const Home = () => {
 
   const[email,setEmail]=useState('');
   const handleSumbit = (e) => {
    e.preventDefault();
      
    
   }
   function click(){
    alert(`Email: ${email}`)
   }


  return (
    <> 
    
     
      <div className='zero' >
    <div>
      <h1 className='child' id='c' >Child Care Expert</h1>
       
       
       <p className='para'>Facilisi commodo ac consequat erat risus duis velit quis velit fermentum feugiat sit bibendum pellentesque semper maecenas posuere cursus gravida.</p>
       <br></br>
       <button className='about' style={{ fontFamily:'fantasy',textDecoration:'none' }}><Link   style={{textDecoration:'none'}} to='/Contact'>Contact</Link></button>
   </div>
    <div>
   
        <img className='toto' src={photo}  alt='toto'/>
    </div>
    </div>

    <div className='old'>
      <div class="container">
        <div class="row">
          <div class="col">
             <img className='pati'  src={pati} alt='pati' />
             <h5 className='name' id='f'>Theresa Miles</h5>
             <p className='name' id='f'>Center Director</p>

          </div>
        </div>
      </div>
     
      <div class="containerfluid" className='six'>
        <div class="row">
          <div class="col">
            <h1 id='patt' className='f' >Create and Enhance Comprehensive Early Childhood Systems</h1><br></br>
             <p id='patt'  className='f' >Erat morbi gravida ut massa sociis tempus cras nunc lobortis tristique mi sollicitudin ut lectus elit est, quisque eget sed arcu praesent in gravida.</p>
             <h5 id='patt'  className='f' >“Dolor fermentum amet tortor cursus duis imperdiet amet, velit, amet, amet sit tincidunt morbi tristique phasellus nec pretium leo nulla cursus lectus.”</h5>
          </div>
        </div>

      
     
      </div>
       
       
    </div>


 
    <div className='old' style={{lineHeight:'200ph'}}>
    <div className='container-fulid'>
      <div className='row ' style={{paddingTop:'100px',paddingLeft:'10px'}}>
        <div className='col '  style={{paddingRight:'100px'}}>
          <h1  style={{fontFamily:'cursive' ,    }}>FEATURED ARTICLES</h1>
          <p className='f' style={{width:'500px',marginTop:'20px'}}> Dolor ultrices facilisis odio donec massa amet mattis nunc scelerisque nunc tincidunt vitae nunc amet placerat.</p>

        </div>
           
          </div>
          </div>
          </div>

         <div >
          <div class='container-fulid'  >
            <div class='row'>
              <div class='col-4'>
                 <div class='card'>
              <img src={card1}  className='i' alt='card1'  />
              <div class='intro'>
                <h1 className='h1'style={{fontSize:'22px'}} >Vulputate hendrerit libero augue etiam</h1>
                <p className='p'>Molestie risus, tempor duis tempus diam ornare mauris ac odio bibendum lectus blandit senectus odio nisl.</p>
              </div>

            </div>

              </div>
              <div class='col-4'>
                 <div class='card'>
              <img src={card2}  className='i' alt='card2'/>
              <div class='intro'>
                <h1 className='h1'>Justo sem condimentum ante aliquam</h1>
                <p className='p'> Mattis adipiscing etiam ac feugiat sed consequat a donec ultrices euismod elit mauris risus diam morbi.</p>
              </div>

            </div>

              </div>
              <div class='col-4'>
                 <div class='card'>
              <img src={card3}  className='i' alt='card3'/>
              <div class='intro'>
                <h1 className='h1'>Nibh tristique duis cras et</h1>
                <p className='p'>Quisque eleifend at sed in arcu sit eu, facilisi orci sapien, sed placerat cursus blandit amet neque, turpis ipsum dolor ultricies eget dolor enim.</p>
              </div>

            </div>

              </div>
            </div>
           
          </div>
         </div>





    
    <div id='back' style={{display:'flex',fontFamily:'sans-serif'}}>
      <div className='container mt-5 ' style={{paddingTop:'15%'}} > 
        <div  className='row'>
          <div className='col'>
            <div  style={{marginTop:'20%',marginLeft:'6%'}} >
            <h1 style={{fontWeight:'700', fontFamily:'cursive' }}>Child Care Topics</h1>
            <br></br>
            <p  style={{width:'500px'}}  className='f'>Imperdiet tempor purus, maecenas pretium et dolor turpis arcu nec orci arcu lacus dictum nunc, ridiculus a vestibulum sapien erat nulla ipsum magna odio.</p>
            <br></br>
            <div  style={{padding:'0px'}} className='col'>
            <ul className='f' >
            <li  style={{listStyle:'inherit',color:'blue', marginRigth:'10px', padding:'3px'}}><span  style={{color:'black'}}>Vestibulum donec euismod tempor ultrices</span></li>
            <li  style={{listStyle:'inherit',color:'blue',padding:'3px'}}><span  style={{color:'black'}}>Egestas lectus amet ut elementum</span></li>
            <li style={{listStyle:'inherit',color:'blue',padding:'3px'}}><span style={{color:'black'}}>Ut rutrum eleifend turpis vel</span></li>
            <li style={{listStyle:'inherit',color:'blue',padding:'3px'}}> <span style={{color:'black'}}>Aliquam massa tincidunt cras donec</span></li>
            
            </ul>
            </div>
            </div>
             
          </div>
        </div>
      </div>
      <div className='container' style={{marginTop:'5%',paddingTop:'10%'}}>
        <div className='row'>
          <div className='col'>

            <img style={{borderRadius:'20px'}} class='mb-3 ' src={child1} alt='chidl'/>
            <img style={{borderRadius:'20px'}}  src={child2} alt='child2'/>  
          </div>
          <div  class='col'  >
             <img style={{borderRadius:'20px'}} class='mb-3  ' src={child3} alt='child3'/>
            <img style={{borderRadius:'20px'}} src={child4} alt='child4'/>
          </div>
        </div>

      </div>
    </div>



    <div class='container-fulid' id='what' > 
       <h1 id='f' style={{marginLeft:'32%',fontSize:'350%',paddingTop:'15%',fontFamily:'cursive'}}>What They Say</h1>
    <div class='row'>
      <div class='col'>
          
        <img className='kutty' src={kutty1} alt='kutty1'/>
        <div  className='say'>
          <p style={{color:'black', fontFamily:'cursive'}}>“In et fringilla purus volutpat viverra sed felis nibh ullamcorper massa, turpis malesuada faucibus sit tristique ut natoque vel adipiscing nisi, vitae nec.”Jonah Schwarz</p>
             <p style={{fontFamily:'serif'}}>Jonah Schwarz</p>
        </div>



      </div>
      <div class='col'>
         
        <img className='kutty' src={kutty2} alt='kutty2'/>
        <div  className='say'>
          <p style={{color:'black', fontFamily:'cursive'}}> “Vitae purus ante enim, nec iaculis proin erat in nullam ipsum ut in vitae nec aliquam at mattis fermentum sagittis.”</p>
          <p style={{fontFamily:'serif' ,paddingTop:'20%'}}>Erin Lawrence</p>

        </div>
        </div>
        <div class='col'>
         
        <img className='kutty' src={kutty3} alt='kutty3'/>
        <div  className='say'>
          <p style={{color:'black', fontFamily:'cursive'}}> “Commodo viverra platea sed mauris ac, aliquam pellentesque dui, etiam tortor, tincidunt ipsum ac at mi id vitae pretium ac vulputate odio varius.”</p>
           <p style={{fontFamily:'serif' ,paddingTop:'9%'}}>Teddy Park</p>

      </div>

     

    </div>
    </div>
    </div>
     



    <div style={{paddingTop:'15%' }}   id='meet'>
      <div class='container'> 
        <div class='row'> 
          <div class='col'>
            <h1 style={{marginTop:'40px',fontFamily:'cursive'}}>Meet The Experts</h1>
            <p style={{fontFamily:'sans-serif'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div class='col '  >
            <img style={{ borderRadius:'20px',}} src={meet1} alt='meet1'/>
            <h5   style={{ textAlign:'center',  paddingTop:'10px',fontFamily:'sans-serif'}}>Sarah B. Johnson</h5>
          </div>
          <div class='col '>
              <img style={{ borderRadius:'20px'}} src={meet2} alt='meet2'/>
              <h5  style={{ textAlign:'center', paddingTop:'10px',fontFamily:'sans-serif'}}>Alicia Michelle</h5>
                 
          </div>
          <div class='col' >
            <img style={{ borderRadius:'20px'}} src={meet3} alt='meet3'/>
            <h5  style={{ textAlign:'center', paddingTop:'10px',fontFamily:'sans-serif'}}>Michael Rich</h5>


          </div>
        </div>
      </div>



    </div>


    
    <div className='meet' style={{paddingTop:'4%'}}>
    <div  class='container mb-5' id='letter'  >
      <div class='row'>
        <div class='col ' id='form1'>
          <h1 style={{fontFamily:'revert-layer'}}>Subscribe to Our Newsletter</h1>
          <p style={{width:'500px', marginLeft:'300px', marginTop:'1%' ,fontFamily:'sans-serif'}}>Aenean massa feugiat imperdiet a scelerisque et morbi tempus massa tincidunt vitae libero aenean tincidunt molestie.</p>
         <form onSubmit={handleSumbit} > <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='EMAIL'  style={{width:'35%', height:'45px', marginTop:'5%',borderRadius:'7px'}}/> <button  type='sumbit' onClick={click}  style={{width:'15%', height:'40px', borderRadius:'7px'}}>Subscribe</button></form>
         
        </div>
 
      </div>


    </div>
    </div>




     
    
    </>
  )
}

export default Home
