import React from 'react';
import logo from './../imagenes/logo_completo.png'

const About=()=>{
return(
    <section className="about">
        <h1  className="text-center"><strong> Soy Anderson Danilo</strong></h1>
       
        <img src={logo} className="rounded mx-auto d-block"alt="logo"/>
        
    </section>
)
}

export default About