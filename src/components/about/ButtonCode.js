import React from 'react'
import Modal from 'react-bootstrap/Modal'
import {AiOutlineCode} from 'react-icons/ai'

const ButtonCode=(props)=>{
 const clickClose=()=>{
     return props.close;
 }
    return(
        <Modal  show={props.view} onHide={clickClose} animation={false}>
        <Modal.Header className="bg-dark" closeButton>
            <Modal.Title>Codigos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
            Me fascinan la programación, especialmente React!.
        </Modal.Body>
        <Modal.Footer className="bg-dark">
            <AiOutlineCode size={30}/>
        </Modal.Footer>
        </Modal>
    )
}
export default ButtonCode;