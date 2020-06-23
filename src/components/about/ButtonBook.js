import React from 'react'
import Modal from 'react-bootstrap/Modal'
import {IoMdBook} from 'react-icons/io'
const ButtonBook=(props)=>{
 const clickClose=()=>{
     return props.handleClose;
 }
    return(
        <Modal  show={props.view} onHide={clickClose} animation={false} >
        <Modal.Header className="bg-dark" closeButton>
            <Modal.Title>Libros</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
            considera la lectura, una parte primordial para el 
            aprendizaje continuo tanto profesional como personal
        </Modal.Body>
        <Modal.Footer className="bg-dark">
        <IoMdBook size={30}/>
        </Modal.Footer>
        </Modal>
    )
}
export default ButtonBook;