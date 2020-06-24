import React from 'react'
import Modal from 'react-bootstrap/Modal'
import {AiOutlineCode} from 'react-icons/ai'
import {DiJavascript1, DiJava,DiCss3, DiSass,DiBootstrap, DiReact} from 'react-icons/di'

const ButtonCode=(props)=>{
 const clickClose=()=>{
     return props.close;
 }
    return(
        <Modal  show={props.view} onHide={clickClose} animation={false}>
        <Modal.Header className="bg-dark" closeButton>
            <Modal.Title>Programación</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
            Me fascinan la programación, especialmente React <DiReact/>!
            Soy desarrollador Front-End y 
            manejo lenguajes como Javscript <DiJavascript1/>, Java <DiJava/>,
            hojas de esilos <DiCss3/><DiSass/>, framework Bootstrap <DiBootstrap/>.

            En Cuestion de Hardware, me inclino mucho por los sistemas Embebidos, ya que
            tengo un titulo en Ingeniería  Electrónica. 
        </Modal.Body>
        <Modal.Footer className="bg-dark">
            <AiOutlineCode size={30}/>
        </Modal.Footer>
        </Modal>
    )
}
export default ButtonCode;