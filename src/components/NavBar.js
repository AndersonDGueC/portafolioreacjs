import React from 'react';

const NavBar=()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  nav_presentation">
           
        <div className="collapse navbar-collapse " id="navbarNav">
     
    <ul className="navbar-nav">
        
      <li className="nav-item active">
        <a className="nav-link" href="#">¿Quien Soy? <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">¿Que hago?</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">¿Donde me contactas?</a>
      </li>
     
    </ul>
  </div>
        </nav>
    )
}

export default NavBar;