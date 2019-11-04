const Button = ReactBootstrap.Button;

const buttonStyle = {
  width: "100px",
  marginBottom: '10px',
};

let MNMLogo = 'http://clipart-library.com/images/rcLo88Lpi.jpg';

const headerArray = ["Crossroads", "You found an Inn", "You're Lost", "Encounter!", "A Challenge!", "Traitors!"]

const bodyArray = ["You have found an inn at a Crossroads. You may choose to stay at the inn or face the danger that awaits. Choose wisely.",
      "You have found an inn.  You may choose to stay at the inn or or bypass it by clicking on the Journey On button.",
      "You are lost! If you have a Merchant retainer, he knows of a shortcut, treat as a result of 1 on this table instead. If you do not have a merchant, roll on this table again with a +1.",
      "Roll on the Encounter Table (3).",
      "If the Rebellion Level is 4, roll on the Challenge Table (7). Otherwise, roll on the Encounter Table (3).",
      "If the Rebellion Level is 4, roll on the Challenge Table (7). Otherwise, roll on the Traitors Attack Table (4)."]

const encounterTable = {
      2: "Morgana",
      3: "Castle Perilous",
      4: "Village of Plague and Death",
      5: "Grail Castle",
      6: "Minions",
      7: "A Knight Issues a Challenge!",
      8: "Minions",
      9: "A Heroic Quest",
      10: "Village of Poverty and Famine",
      11: "Test of Piety",
      12: "Merlin"
    }

function rollDie (dieType) {
  let result = Math.floor(Math.random() * dieType + 1);
  return result
}

function RollDice(props) {
	return (
	  <Button style={buttonStyle} className="pills-rounded" onClick={props.onClick}>
			Roll Dice
	</Button>
	)
}

function StartButton(props) {
	return (
	  <Button style={buttonStyle} className="pills-rounded" onClick={props.onClick}>
			Start
	</Button>
	)
}

function JourneyButton(props) {
	return (
	  <Button style={buttonStyle} className="pills-rounded" onClick={props.onClick}>
			Journey On...
	</Button>
	)
}

function EncounterButton(props) {
	return (
	  <Button style={buttonStyle} className="pills-rounded" onClick={props.onClick}>
			Goto Encounter
	</Button>
	)
}

function InnButton(props) {
	return (
	  <Button style={buttonStyle} className="pills-rounded" onClick={props.onClick}>
			Goto Inn
	</Button>
	)
}


class SimpleExample extends React.Component {
	// React components are simple functions that take in props and state, and render HTML
	constructor(props) {
    super(props);
    this.rollDice = this.rollDice.bind(this)
    this.rollJourney = this.rollJourney.bind(this)
    this.clickStart = this.clickStart.bind(this)
    this.rollEncounter = this.rollEncounter.bind(this)
    this.rollInn = this.rollInn.bind(this)
    
    this.state = {
      count: 0,
      myH1: "Quest for the Grail",
      myH2: "Click the Start button to Start the Game",
      num: 0,
      clickedStart: false,
      journeyRoll: 0,
      encounterRoll: 0,
    };
  }
  
	rollDice() {	
		let mynum = rollDie(6)
		this.setState({num: mynum})
	}
	
	rollJourney() {
		let mynum = rollDie(6)
		//alert("you rolled: " + mynum)
		//this.setState({num: mynum})
    this.setState({journeyRoll: mynum})
		
		let myHead = "The Journey Continues..."
		//alert(myHead)
		this.setState({myH1: "The Journey Continues..."})
		this.setState({myH2: bodyArray[mynum -1]})
		//this.setState({buttons: buttonString})
		//this.setState({clickedStart: true})
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
		alert(theEncounter)
    
		this.setState({myH1: myHead})
		this.setState({myH2: theEncounter})
  }
  
  rollInn() {
    alert("Stay at the inn")
  }
  
  clickStart() {
    let mynum = rollDie(6)
		//alert("you rolled: " + mynum)
		//this.setState({num: mynum})
		this.setState({journeyRoll: mynum})
    
		let myHead = "The Journey Continues..."
		//alert(myHead)
		this.setState({myH1: "The Journey Continues..."})
		this.setState({myH2: bodyArray[mynum -1]})
		//this.setState({buttons: buttonString})
		this.setState({clickedStart: true})
  }
  
	render(props) {
		const clickedStart = this.state.clickedStart
    let journeyRoll = this.state.journeyRoll
    let startBtn;
    let journeyBtn;
    let rollBtn;
    let encounterBtn;
    let innBtn;
    let rebellionLevel = 0;
		
		if (clickedStart) {
			rollBtn = <RollDice onClick={this.rollDice} />
      //let newTitle = ""
        //journeyRoll = 1
        if (journeyRoll == 1) {
          // crossroads = choice of either inn or encounter
          journeyBtn = <JourneyButton onClick={this.rollJourney} />
          encounterBtn = <EncounterButton onClick={this.rollEncounter} />
          //why can't I append some text to the value of the state object?
          //let newTitle = this.state.myH1 + " - Crossroads"
          let newTitle = "Journey - Crossroads"
          this.setState({myH1: newTitle})
        } else if (journeyRoll == 2) {
          // inn or bypass
          journeyBtn = <JourneyButton onClick={this.rollJourney} />
          innBtn = <InnButton onClick={this.rollInn} />
          //let newTitle = this.state.myH1 + " - Inn"
          let newTitle = "Journey - Inn"
          this.setState({myH1: newTitle})
        } else if (journeyRoll == 3) {
          // lost
          journeyBtn = <JourneyButton onClick={this.rollJourney} />
          //let newTitle = this.state.myH1 + " - Lost!"
          let newTitle = "Journey - Lost!"
          this.setState({myH1: newTitle})
        } else if (journeyRoll == 4) {
          // Encounter.  No journey button here
          encounterBtn = <EncounterButton onClick={this.rollEncounter} />
          //let newTitle = this.state.myH1 + " - Encounter"
          let newTitle = "Journey - Encounter"
          this.setState({myH1: newTitle})
        } else if (journeyRoll == 5) {
          // Challenge or Encounter
          if (rebellionLevel > 3) {
            // go to challenge
            //let newTitle = this.state.myH1 + " - A Challenge!"
            let newTitle = "Journey - A Challenge!"
            this.setState({myH1: newTitle})
          } else {
            
            // go to encounter
            encounterBtn = <EncounterButton onClick={this.rollEncounter} />
            //let newTitle = this.state.myH1 + " - Encounter"
            let newTitle = "Journey - Encounter"
            this.setState({myH1: newTitle})
          }
          journeyBtn = <JourneyButton onClick={this.rollJourney} />
        } else if (journeyRoll == 6) {
          // Challenge or Traitors
          if (rebellionLevel > 3) {
            //let newTitle = this.state.myH1 + " - A Challenge!"
            let newTitle = "Journey - A Challenge!"
            this.setState({myH1: newTitle})
          } else {
            //let newTitle = this.state.myH1 + " - Traitors!"
            let newTitle = "Journey - Traitors!"
            this.setState({myH1: newTitle})
          }
          journeyBtn = <JourneyButton onClick={this.rollJourney} />
        } else {
          alert("Invalid roll!" + journeyRoll)
        }
		} else {
			startBtn = <StartButton onClick={this.clickStart} />

		}
		
		return (
			<div>{/* React components must have a wrapper node/element */}
        <div className="form-group"> {/* class is reserved in JS, so className must be used */}
					<img src={MNMLogo} /> { /* Notice no quotes ("") for the src expression */ }
				</div>
				<h1 id="myH1">{this.state.myH1}</h1>
				<h2 id="myh2">{this.state.myH2}</h2>
				<p>Die Roll: {this.state.num}</p>
				
				<div className="form-group">
					{startBtn}
          {rollBtn}
          {journeyBtn}
          {encounterBtn}
          {innBtn}
				</div>
				<p className="help-block" dangerouslySetInnerHTML={{__html: 'I\'m some <span class="text-danger">dangerous</span> helper text.'}} />{/* This inserts raw HTML and is also a self-closing tag */}
			</div>
		);
	}

}

ReactDOM.render(<SimpleExample />, document.getElementById('example'));
