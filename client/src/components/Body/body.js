import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import {rollDie, rollJourneyTable} from '../../utils/functionsDir'
import './body.css';
import $ from 'jquery';
import {journeyTable, encounterTable} from '../data/tableData';
import playerCharacterStats from '../data/characterStats';
import LoginModal from '../Modal/LoginModal'
import RegisterModal from '../Modal/RegisterModal'

const buttonStyle = {
    //width: "100px",
    marginBottom: '10px',
  };

function StartButton(props) {
	return (
	  <Button className = "pills-rounded" variant="dark" onClick={props.onClick}>
			Start
	  </Button>
	)
}

function RollDice(props) {
	return (
	  <Button className = "pills-rounded" variant="dark" onClick={props.onClick}>
			Roll Dice
	  </Button>
	)
}

function JourneyButton(props) {
	return (
	  <Button  className="pills-rounded" variant="dark" onClick={props.onClick}>
			Journey On...
	</Button>
	)
}

function EncounterButton(props) {
	return (
	  <Button  className="pills-rounded" variant="dark" onClick={props.onClick}>
			Goto Encounter
	</Button>
	)
}

function InnButton(props) {
	return (
	  <Button  className="pills-rounded" variant="dark" onClick={props.onClick}>
			Goto Inn
	</Button>
	)
}

function ChallengeButton(props) {
	return (
	  <Button className="pills-rounded" variant="dark" onClick={props.onClick}>
			Goto Challenge!
	</Button>
	)
}

// Main App
class Body extends Component {
    state = {
        flag1: true
    }
    constructor() {
        super();
        this.rollJourney = this.rollJourney.bind(this)
        this.rollDice = this.rollDice.bind(this)
        this.clickStart = this.clickStart.bind(this)
        this.rollEncounter = this.rollEncounter.bind(this)
        this.rollInn = this.rollInn.bind(this)
        this.rollChallenge = this.rollChallenge.bind(this)

        // Initial state
        this.state = { 
            open: false,
            eventTitle: "{==  Quest for the Grail  ==}",
            eventBody: "Click the Start button to Start the Game",
		    num: 0,
            clickedStart: false,
            journeyRoll: 0,
            encounterRoll: 0,
            clickedJourney: false,
            clickedEncounter: false,
            clickedInn: false,
            clickedChallenge: false,
            innRoll: 0,
            challengeRoll: 0,
        };
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

    rollDice() {	
		let mynum = rollDie(6)
		this.setState({num: mynum})
	}


    rollJourney() {
		let mynum = rollDie(6)
		//alert("you rolled: " + mynum)
		this.setState({journeyRoll: mynum})

		//alert(myHead)
        //this.setState({eventTitle: "Journey on..."})

        switch(mynum) {
            case 1: 
                this.setState({eventTitle: "Journey - Crossroads"})
            break;
            case 2: 
                this.setState({eventTitle: "Journey - Inn"})
            break;
            case 3: 
                this.setState({eventTitle: "Journey - Lost!"})
            break;
            case 4: 
                this.setState({eventTitle: "Journey - An Encounter!"})
            break;
            case 5: 
                if (playerCharacterStats.rebellionLevel > 3) {
                    this.setState({eventTitle: "Journey - A Challenge!"})
                } else {
                    this.setState({eventTitle: "Journey - An Encounter!"})
                }
            break;
            case 6: 
                if (playerCharacterStats.rebellionLevel > 3) {
                    this.setState({eventTitle: "Journey - A Challenge!"})
                } else {
                    this.setState({eventTitle: "Journey - Traitors!"})
                }
            break;
        }

        playerCharacterStats.eventTitle = "Journey on..."
		this.setState({eventBody: journeyTable[mynum -1]})
		//this.setState({buttons: buttonString})
        this.setState({clickedStart: true})
        this.setState({clickedJourney: true})
	}

    rollEncounter() {
        let firstRoll = rollDie(6)
        let secondRoll = rollDie(6)
        let totalRoll = firstRoll + secondRoll
        
        //totalRoll = 7
        this.setState({encounterRoll: totalRoll})
        
        //altEncounter = false
        alert("Roll: (" + firstRoll + " + " + secondRoll + ") = " + totalRoll)
        let theEncounter = encounterTable[totalRoll]
        let myHead = "An Encounter"
        //alert(theEncounter)
        theEncounter = 2
        switch (theEncounter) {
        case 2: 
            this.setState({eventTitle: "An Encounter Morgana!"})
            this.setState({eventBody: "Morgana uses trickery to make you forget..."})
            // make three saves
        break;
        }
        
        this.setState({clickedEncounter: true})
        this.setState({clickedJourney: false})
        //this.setState({eventTitle: myHead})
        playerCharacterStats.eventTitle = "An Encounter"
        //this.setState({eventBody: theEncounter})
      }
      
      rollInn() {
        alert("Stay at the inn")
        this.setState({clickedInn: true})
      }

      rollChallenge(){
        alert("You have been challenged to a duel!")
        this.setState({clickedChallenge: true})
      }

      componentDidMount() {
          //this.setState({eventTitle: playerCharacterStats.even})
      }
      
      clickStart() {
        let mynum = rollDie(6)
            //alert("you rolled: " + mynum)
            //this.setState({num: mynum})
            this.setState({journeyRoll: mynum})
        
            let myHead = "The Journey Continues..."
            //alert(myHead)
            this.setState({eventTitle: "The Journey Continues..."})

            this.setState({eventBody: journeyTable[mynum -1]})
            //this.setState({buttons: buttonString})
            this.setState({clickedStart: true})
            this.setState({clickedJourney: true})
      }

    render(props) {
        const clickedStart = this.state.clickedStart
        let clickedJourney = this.state.clickedJourney
        let clickedEncounter = this.state.clickedEncounter
        let clickedInn = this.state.clickedInn
        let clickedChallenge = this.state.clickedChallenge

        let journeyRoll = this.state.journeyRoll
        let encounterRoll = this.state.encounterRoll
        let innRoll = this.state.innRoll
        let challengeRoll = this.state.challengeRoll

        let startBtn;
        let journeyBtn;
        let rollBtn;
        let encounterBtn;
        let innBtn;

        let rebellionLevel = playerCharacterStats.rebellionLevel;

        if (!clickedStart) {
            startBtn = <StartButton onClick={this.clickStart} />
        }

        if (clickedJourney) {
            rollBtn = <RollDice onClick={this.rollDice} />
            if (journeyRoll == 1) {
                // crossroads = choice of either inn or encounter
                journeyBtn = <JourneyButton onClick={this.rollJourney} />
                encounterBtn = <EncounterButton onClick={this.rollEncounter} />
                //why can't I append some text to the value of the state object?
                //let newTitle = this.state.myH1 + " - Crossroads"
                let newTitle = "Journey - Crossroads"
                playerCharacterStats.eventTitle = newTitle
              } else if (journeyRoll == 2) {
                // inn or bypass
                journeyBtn = <JourneyButton onClick={this.rollJourney} />
                innBtn = <InnButton onClick={this.rollInn} />
                //let newTitle = this.state.myH1 + " - Inn"
                let newTitle = "Journey - Inn"
                playerCharacterStats.eventTitle = newTitle
              } else if (journeyRoll == 3) {
                // lost
                journeyBtn = <JourneyButton onClick={this.rollJourney} />
                //let newTitle = this.state.myH1 + " - Lost!"
                let newTitle = "Journey - Lost!"
                playerCharacterStats.eventTitle = newTitle
              } else if (journeyRoll == 4) {
                // Encounter.  No journey button here
                encounterBtn = <EncounterButton onClick={this.rollEncounter} />
                //let newTitle = this.state.myH1 + " - Encounter"
                let newTitle = "Journey - Encounter"
                playerCharacterStats.eventTitle = newTitle
              } else if (journeyRoll == 5) {
                // Challenge or Encounter
                if (rebellionLevel > 3) {
                  // go to challenge
                  //let newTitle = this.state.myH1 + " - A Challenge!"
                  let newTitle = "Journey - A Challenge!"
                  playerCharacterStats.eventTitle = newTitle
                } else {
                  
                  // go to encounter
                  encounterBtn = <EncounterButton onClick={this.rollEncounter} />
                  //let newTitle = this.state.myH1 + " - Encounter"
                  let newTitle = "Journey - Encounter"
                  playerCharacterStats.eventTitle = newTitle
                }
                journeyBtn = <JourneyButton onClick={this.rollJourney} />
              } else if (journeyRoll == 6) {
                // Challenge or Traitors
                if (rebellionLevel > 3) {
                  //let newTitle = this.state.myH1 + " - A Challenge!"
                  let newTitle = "Journey - A Challenge!"
                  playerCharacterStats.eventTitle = newTitle
                } else {
                  //let newTitle = this.state.myH1 + " - Traitors!"
                  let newTitle = "Journey - Traitors!"
                  playerCharacterStats.eventTitle = newTitle
                }
                journeyBtn = <JourneyButton onClick={this.rollJourney} />
              } else {
                alert("Invalid roll!" + journeyRoll)
              }
        } 

        if (clickedEncounter) {
            // display buttons depending upon the roll
            encounterRoll = 2
            switch (encounterRoll) {
              case 2: 
                journeyBtn = <JourneyButton onClick={this.rollJourney} />
              break;
            }
          }
          if (clickedInn) {
            // display buttons depending upon the roll
            innRoll = 2
            //alert("clicked journey: " + clickedJourney)
            switch (innRoll) {
              case 2: 
                journeyBtn = <JourneyButton onClick={this.rollJourney} />
              break;
            }
          }
          
          if (clickedChallenge) {
            // display buttons depending upon the roll
            challengeRoll = 2
            //alert("clicked journey: " + clickedJourney)
            switch (challengeRoll) {
              case 2: 
                journeyBtn = <JourneyButton onClick={this.rollJourney} />
              break;
            }
          }
        return (

            // <div className="myBlueBorder">
            <div className="mt-5">
                <h1>
                   
                </h1>
                {/* <Story /> */}
                {/* <div className={this.flag1 == true ? "bg-success" : "bg-danger"}>  fffffffff</div> */}


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
                                              <LoginModal>
                                                Sign In
                                              </LoginModal>
                                              <RegisterModal>
                                                Register
                                              </RegisterModal>                                            
                                            
                                                

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
                              {/* <StoryTitle titleText={this.props.titleText} /> */}
                              {this.state.eventTitle}
                            </div>
                        </div>

                        <div className="d-flex flex-wrap">
                            <div id="gameTableText" className="px-4 py-2 bg-dark rounded shadow-sm textBlock-bg">
                                {/* <StoryBody bodyText={this.props.bodyText} /> */}
                                {this.state.eventBody}
                                <p>Die Roll: {this.state.num}</p>
                            </div>
                        </div>
                        <div id="gameButtons" className="d-flex mt-2 justify-content-between">
                            <div className="mt-2">
                            {startBtn}
                            {rollBtn}
                            {journeyBtn}
                            {encounterBtn}
                            {innBtn}
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
