import React, { Component } from 'react';
//import {customAlert, rollDie} from '../../../utils/functionsDir'
//import './Story.css';

class StoryBody extends Component {
    render() {
        return (
            <div className="container-fluid">
                {this.props.bodyText}
            </div>
        )
    }
}


/*class Parent extends React.Component {
    render() {
        return (
            <Child example="foo" />
            
        )
    }
}*/

/* class Child extends React.component {
    render() {
        return (
            <h1>{this.props.example}</h1>
        )
    }
} */




export default StoryBody;