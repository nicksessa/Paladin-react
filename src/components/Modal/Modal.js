import React, { Component, useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PC_stats from '../data/characterStats';
import playerCharacterStats from '../data/characterStats';
import './modal.css';

//import './Modal.css';


const CharacterModal = () => {
    //class CharacterModal extends Component{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //const myHeading = {PC_stats.name}
    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                {PC_stats.name}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header  className="myBackgroundColor" closeButton>
                    <Modal.Title  className="myBackgroundColor">{PC_stats.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body  className="myBackgroundColor">
                    
                        <div>
                            <h1>{playerCharacterStats.name}</h1>
                            <hr/>
                            <span>Hit Points: {playerCharacterStats.cur_hp} / {playerCharacterStats.max_hp}</span><br/>
                            <span>Attack: {playerCharacterStats.attack}+</span><br/>
                            <span>Damage Modifier: {playerCharacterStats.dmg_mod}</span><br/>
                            <span>Armor Modifier: {playerCharacterStats.armor}</span><br/>
                            <hr/>
                            <h3>Equipment</h3>
                            <span>Longsword</span><br/>
                            <span>Chainmail</span><br/>
                            <span>Shield</span><br/>
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


export default CharacterModal;