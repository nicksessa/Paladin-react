import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import {rollDie, rollJourneyTable} from '../../utils/functionsDir'
import Story from './Story/story'
import StoryTitle from './StoryTitle'
import StoryBody from './StoryBody'
import './body.css';
import $ from 'jquery';

// Main App
class Body extends Component {
    state = {
        flag1: true
    }
    constructor() {
        super();

        // Initial state
        this.state = { open: false };

    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClickOutside, false)
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, false)
    }

    handleClickOutside = (e) => {
        if (this.node.contains(e.target)) {
            return
        }
        this.handleClick()
    }

    handleClick() {
        this.setState({ open: false })

    }

    render() {
        return (

            <div className="myBlueBorder">
                <h1>
                    main body
                </h1>
                <Story />
                <div className={this.flag1 == true ? "bg-success" : "bg-danger"}>  fffffffff</div>


                <div className="row bodyDiv">
                    {/* <!-- body row --> */}

                    <div className="col-3 px-0">
                        {/* <!-- first col (side menu goes here) --> */}
                        <div className="d-flex flex-wrap ml-4">
                            <button className="btn bg-dark " onClick={this.toggle.bind(this)}>
                                Menu
                            </button>
                        </div>
                        <div ref={node => this.node = node}>
                            <div className="d-flex flex-wrap ml-4">
                                <div className="col px-0">
                                    <div id="demo" className={"collapse" + (this.state.open ? ' in' : '')}>
                                        <div className="bg-dark d-flex flex-wrap textBlock-bg parchment rounded">
                                            <div className="btn-group-vertical px-2">
                                                <button type="button" className="btn sideMenuBtn text-left">Sign In/Sign Up</button>

                                                <button type="button" className="btn sideMenuBtn text-left">Save Game</button>

                                                <button type="button" className="btn sideMenuBtn text-left">Restart Game</button>
                                                <button id="backgroundURL1_btn" className="btn sideMenuBtn rounded text-left">Background 1</button>
                                                <button id="backgroundURL2_btn" className="btn sideMenuBtn rounded text-left">Background 2</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- main body column --> */}

                    <div className="col">
                        <div className="d-flex flex-wrap">
                            <div id="gameTableTitle" className="px-4 py-2 mb-2 bg-dark rounded shadow-sm textBlock-bg">
                              <StoryTitle titleText={this.props.titleText} />
                            </div>
                        </div>

                        <div className="d-flex flex-wrap">
                            <div id="gameTableText" className="px-4 py-2 bg-dark rounded shadow-sm textBlock-bg">
                                <StoryBody bodyText={this.props.bodyText} />
                            </div>
                        </div>
                        <div id="gameButtons">
                            <div className="mt-2">
                                
                                {/* <button onClick="rollJourneyTable()" data-id="rollJourneyBtn" type="button" className="btn btn-dark rounded-pill mx-2 btn-sm">
                                    <i className="mt-2"></i>
                                    Journey On
                                </button> */}

                                <Button className="btn btn-dark pills-rounded mx-2 btn-sm" onClick={()=> rollJourneyTable()}>
                                    Journey Onward
                                </Button>

                            </div>
                        </div>
                    </div>
                    {/* <!-- column 2--> */}
                    <div className="col-3"></div>
                    {/* <!-- column 3--> */}
                </div>
            </div>

        )
    }

}

export default Body;
