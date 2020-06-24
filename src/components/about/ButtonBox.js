import React from 'react'
import Modal from 'react-bootstrap/Modal'
import {GiBoxingGloveSurprise} from 'react-icons/gi'

const ButtonBox=(props)=>{
 const clickClose=()=>{
     return props.close;
 }
    return(
        <Modal  show={props.view} onHide={clickClose} animation={false}>
        <Modal.Header className="bg-dark" closeButton>
            <Modal.Title>Deportes</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
            Me gusta muchos los deportes, principalmente el boxeo, considero 
            que es un deporte de estrategia y técnica en la cual, ayuda a manter
            tu salud fisica y mental.
        </Modal.Body>
        <Modal.Footer className="bg-dark">
           <GiBoxingGloveSurprise size={30}/>
        </Modal.Footer>
        </Modal>
    )
}
export default ButtonBox;