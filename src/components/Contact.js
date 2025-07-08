import React, { useState } from 'react'
import  './Contact.css'
import logo from '../image/logo-1162901_1280.png'
import { click } from '@testing-library/user-event/dist/click';

 

const Contact = () => {

  const[name,setName]=useState('');
  const[lastname,setLname]=useState('');
  const[email,setEmail]=useState('');
  const[subject,setSubject]=useState('');
  const[message,setMessage]=useState('');
  const handleSumbit=(e)=>{
    e.preventDefault();
  }
    
    function change(){
      alert(`${name}.${lastname}`)
     
      alert(`${email}`)
      alert(`${subject}`)
      alert(`${message}`)
    }
  
  return (
    <> 
    <div className='form'>
       <div className='container'>
       <div className='row'>
        <div className='col'>
       <h1 className='cont'  >CONTACT</h1>
       <p className='con' >Sit venenatis venenatis ultrices nulla turpis erat donec nulla mattis lobortis dignissim quis est orci aenean morbi platea et ornare facilisis pellentesque magna et.</p>
       <br></br>
       <p className='con'>say hi</p>
       <h1 className='con'>hharish@gmail.com</h1>
       <br></br>
       <hr  className='hr'></hr>
       <div className='col'>
       <p className='con'> Let's Talk</p>
       <h1 className='con'>6384232664</h1>
       <hr className='hr'></hr>
        
       </div>
       </div>
      </div> 
      </div>
      <div id='form'>
       <form onSubmit={handleSumbit} >
        <h1>Send A Message</h1>
        NAME<br></br>
        <input  type='name' style={{height:'40px',width:'170px',borderRadius:'5px', borderColor:'white' ,backgroundColor:'whitesmoke'}}  placeholder='FIRST'  value={name}  onChange={(e)=> setName(e.target.value) }/>   <input type='name'  style={{height:'40px',width:'170px' ,borderRadius:'5px', borderColor:'white',backgroundColor:'whitesmoke'}}  placeholder='LAST' value={lastname}  onChange={(e)=> setLname(e.target.value) } />
        <br></br>
        <br></br>
        EMAIL<br></br>
        <input  type='email*' style={{height:'40px',width:'350px' ,borderRadius:'5px', borderColor:'white',backgroundColor:'whitesmoke'}} value={email} onChange={(e) => setEmail(e.target.value)}   /><br></br>
        <br></br>
        SUBJECT<br></br>
        <input  type='name' style={{height:'40px',width:'350px' ,borderRadius:'5px', borderColor:'white',backgroundColor:'whitesmoke'}} value={subject} onChange={(e) => setSubject(e.target.value)}/><br></br>
        <br></br>
        MESSAGE<br></br>
        <input  type='name'  style={{height:'100px',width:'350px' ,borderRadius:'5px', borderColor:'white',backgroundColor:'whitesmoke'}} placeholder='meassage'   value={message} onChange={(e) => setMessage(e.target.value)}/><br></br>
        <br></br>
        <button className='button'   type='sumbit' onClick={change} >Sumbit Message</button>
       </form>
       </div>
       <hr></hr>
    </div>
     
    </>
  )
}

export default Contact
