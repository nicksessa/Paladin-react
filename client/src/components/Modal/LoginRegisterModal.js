import React, { Component, useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PC_stats from '../data/characterStats';
import './modal.css';

//import './Modal.css';


const LoginRegisterModal = () => {
    //class CharacterModal extends Component{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //const myHeading = {PC_stats.name}
    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Sign In/Register
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header  className="myBackgroundColor" closeButton>
                    <Modal.Title  className="myBackgroundColor">{PC_stats.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body  className="myBackgroundColor">
                    
                <div>
                    login/register
                </div>
                        
                
                </Modal.Body>
                <Modal.Footer  className="myBackgroundColor">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default LoginRegisterModal;