import React, { Component, useState } from 'react';
//import React, { useState } from "react";
import Navbar from './Navbar';
import Wrapper from './Wrapper';
import Footer from './Footer';
import Banner from './Banner';
import Card from "./Card";
import cards from '../images/images.json';
import PC_stats from './data/characterStats';
import Body from './Body/body'
import './paladin-react.css';
//import Modal from './Modal'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//import "./App.css";

const Example = () => {
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
	<>
  	<Button variant="primary" onClick={handleShow}>
    	Launch demo modal
  	</Button>
 
  	<Modal show={show} onHide={handleClose}>
    	<Modal.Header closeButton>
      	<Modal.Title>Modal heading</Modal.Title>
    	</Modal.Header>
    	<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    	<Modal.Footer>
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


// Main App
class PaladinGame extends Component {
    state = {
        //modalFlag: true,
        currentHP: 0,
        maxHP: 0,
        rumors: 0,
        turn: 0,
        healingPotions: 0,
        rebellionLevel: 0,
        piety: 0,
        flag: false
    }

    // this function fires basically on page load!
    //  important!  huge!  I have seen the light!
    componentDidMount() {
        console.log(PC_stats.cur_hp)

        this.setState({ charName: PC_stats.name})
        this.setState({ currentHP: PC_stats.cur_hp })
        this.setState({ maxHP: PC_stats.max_hp })
        this.setState({ rumors: PC_stats.rumors })
        this.setState({ turn: PC_stats.turn })
        this.setState({ rebellionLevel: PC_stats.rebellionLevel })
        this.setState({ piety: PC_stats.piety })
        this.setState({ healingPotions: PC_stats.healingPotions })

        if (this.state.currentHP < this.state.maxHP) {
            this.state.flag = true
        } else {
            this.state.flag = false
        }
    }

    render() {
        const state = this.state;
        return (
            <div>
                <Navbar
                    charName={this.state.charName}
                    currentHP={this.state.currentHP}
                    maxHP={this.state.maxHP}
                    rumors={this.state.rumors}
                    piety={this.state.piety}
                    healingPotions={this.state.healingPotions}
                    turn={this.state.turn}
                    rebellionLevel={this.state.rebellionLevel}

                />

                <Body>
                </Body>
                
                {/* <Example /> */}
                <Footer />
            </div>
        )
    }
}

export default PaladinGame;