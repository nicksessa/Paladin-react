import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import {myAlert, customAlert, rollDie} from '../../../utils/functionsDir'
//import './Story.css';

class Story extends Component {

    render() {
        const myStoryBtn = () => alert("hi")
        const d6 = 6
        const roll = () => customAlert(rollDie(d6))

        return (
            <div className="container-fluid myYellowBorder">
                Story goes here
                <Button variant="dark" onClick={myStoryBtn}>
                    Run Me
                </Button>
                <Button onClick={myAlert}>
                    MY ALERT
                </Button>

                <Button onClick={()=> customAlert("ABC text")}>
                    Custom ALERT
                </Button>

                <Button onClick={roll}>
                    roll d6
                </Button>
            </div>
        )
    }
}


export default Story;