import React from 'react';
import NavBar from '../NavBar'
import NetsFooter from '../NetsFooter'
import Buttons from './Bottons'


const About=()=>{
return(
    
    <section className="about">
        <div className="container-fluid">
        <div className="row">
            <div className="col-3">    
        <NavBar/>
        
            </div>
            <div className="col-9">
        <h1  className="text-center"><strong> Soy Anderson Danilo</strong></h1>
       
        <Buttons />
            </div>
        </div>
        <NetsFooter/>
        </div>
    </section>
    
)
}

export default About