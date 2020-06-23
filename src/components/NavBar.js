import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const NavBar=()=>{
  
    return (
        <nav  className="navbar  navbar-expand-md navbar-dark  nav_presentation ">
           
        <div className="collapse navbar-collapse  " id="navbarNav">
     
    <ul className="navbar-nav flex-column p-5">
        
      <li className={`nav-item `}>
        <Link className="nav-link" to="/">Conoceme</Link>
      </li>
      <li className={`nav-item `}>
        <Link className="nav-link" to="proyect">Trabajos</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="contact">Contactame</Link>
      </li>
     
    </ul>
  </div>
        </nav>
    )
}

export default NavBar;