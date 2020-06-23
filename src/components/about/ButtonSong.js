import React from 'react'
import Modal from 'react-bootstrap/Modal'
import {GiLoveSong} from 'react-icons/gi'

const ButtonSong=(props)=>{
 const clickClose=()=>{
     return props.close;
 }
    return(
        <Modal  show={props.view} onHide={clickClose} animation={false}>
        <Modal.Header className="bg-dark" closeButton>
            <Modal.Title>Música</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
            Mi mayor parte del tiempo escucho musica, mientras trabajo 
            entonces ya imaginaras la creatividad
        </Modal.Body>
        <Modal.Footer className="bg-dark">
            <GiLoveSong size={30}/>
        </Modal.Footer>
        </Modal>
    )
}
export default ButtonSong;