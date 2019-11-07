import React, { Component, useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PC_stats from '../data/characterStats';
import './modal.css';

//import './Modal.css';


const LoginModal = () => {
    //class CharacterModal extends Component{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //const myHeading = {PC_stats.name}
    return (
        <>
            <Button className="btn sideMenuBtn text-left" onClick={handleShow}>
                Sign In
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header  className="myBackgroundColor" closeButton>
                    <Modal.Title  className="myBackgroundColor">Login - {PC_stats.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body  className="myBackgroundColor">
                    
                <div>
                    <form action="../../../../../controllers/authenticate-controller" method="POST">  
                    <div className="form-group">
                        <label htmlFor="userNameInput">Username</label>
                        <input type="text" id="userNameInput" name="user_name" className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="userPasswordInput">Password</label>
                    <input type="password" id="userPasswordInput" name="password" className="form-control form-control-lg" />
                    </div>
                    
                        
                    <input type="submit" value="Submit" />  
                    </form>
                </div>
                        
                
                </Modal.Body>
                <Modal.Footer  className="myBackgroundColor">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default LoginModal;