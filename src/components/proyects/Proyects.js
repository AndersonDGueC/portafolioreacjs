import React, {useState} from 'react'
import NavBar from './../NavBar'
import NetsFooter from '../NetsFooter'
import Carousel from 'react-bootstrap/Carousel'
import proyectType from './typeProyect.json'  
import tribute from './../../imagenes/tribute_page.png'
import tecnhical from './../../imagenes/tecnhical_page.png'
import randomquote from './../../imagenes/randomquote.png'
import markdown from './../../imagenes/markdown.png'
import landing from './../../imagenes/landing_page.png'
import formulario from './../../imagenes/formulario.png'
import drum from './../../imagenes/drum_machine.png'
import calculator from './../../imagenes/calculator.png'


const Proyects=()=>{
   const type=[tribute,formulario,landing,tecnhical,randomquote,markdown,drum,calculator]
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex,e) => {
      setIndex(selectedIndex);
      
    };
    
    return (

        <section className="proyects">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
            <NavBar/>
            </div>
            <div className="col-9">
            <h1  className="text-center"><strong>Proyectos</strong></h1>
            <Carousel  activeIndex={index} onSelect={handleSelect} slide={false}>
        
      {
        proyectType.typeProyect.map((arr,index)=>{
          
          return(
            <Carousel.Item key={arr.name}>
        <section className="text-center">
        <article>
        <img
          className="d-block w-100"
          src={type[index]}
          alt={arr.name}
        />
        <a href={arr.url} target="_blank">Click Me</a>
        </article>
        <article>
          <h3>{arr.name}</h3> <br/>
          <br/>
          </article>
          </section>
      </Carousel.Item>
          )
        })
      }
      
    </Carousel>
    </div>
    </div>
      <NetsFooter/>
      </div>
        </section>
    )

}

export default Proyects;