import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css' 
import logo from '../image/im.jpg'
const Nav = () => {


  return (
    <>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link id='nav' class="navbar-brand" to="/BOOCAH">BOOCAH</Link>
      <ul    class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:'25%'}}>
        <li class="nav-item">
          <Link  id='one' class="nav-link active" aria-current="page" to='/Home'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" id='one' to="/Blog">Blog</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link"  id='one' to="/Babies">Babies</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" id='one' to="/Sensoryplay">SensoryPlay</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
    
    




  )
}

export default Nav
