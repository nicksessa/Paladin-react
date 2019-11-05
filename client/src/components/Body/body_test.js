const Button = ReactBootstrap.Button;

const buttonStyle = {
  width: "100px",
  marginBottom: '10px',
};

let MNMLogo = 'http://clipart-library.com/images/rcLo88Lpi.jpg';
let GrailLogo1 = 'https://wp-media.patheos.com/blogs/sites/524/2019/08/Holy-Grail.jpg'
let GrailLogo = 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1049235014%2F960x0.jpg%3Ffit%3Dscale'

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

function ChallengeButton(props) {
	return (
	  <Button style={buttonStyle} className="pills-rounded" onClick={props.onClick}>
			Goto Challenge!
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
    this.rollChallenge = this.rollChallenge.bind(this)
    
    this.state = {
      count: 0,
      eventTitle: "Quest for the Grail",
      eventBody: "Click the Start button to Start the Game",
      num: 0,
      clickedStart: false,
      clickedJourney: false,
      clickedEncounter: false,
      clickedInn: false,
      clickedChallenge: false,
      journeyRoll: 0,
      encounterRoll: 0,
      innRoll: 0,
      challengeRoll: 0,
    };
  }
  
	rollDice() {	
		let mynum = rollDie(6)
		this.setState({num: mynum})
	}
	
	rollJourney() {
    this.setState({clickedJourney: true})
		let mynum = rollDie(6)
		//alert("you rolled: " + mynum)
    this.setState({journeyRoll: mynum})
		
		let myHead = "The Journey Continues..."
		//this.setState({myH1: "The Journey Continues..."})
		this.setState({eventBody: bodyArray[mynum -1]})
		this.setState({clickedJourney: true})
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
	}
  
  rollEncounter() {
    let firstRoll = rollDie(6)
    let secondRoll = rollDie(6)
    let totalRoll = firstRoll + secondRoll
    
    //totalRoll = 7
    this.setState({encounterRoll: totalRoll})
    
    //altEncounter = false
    //alert("Roll: (" + firstRoll + " + " + secondRoll + ") = " + totalRoll)
    let theEncounter = encounterTable[totalRoll]
    let myHead = "An Encounter"
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
  }
  
  rollInn() {
    alert("Stay at the inn")
    this.setState({clickedInn: true})
  }
  
  rollChallenge(){
    alert("You have been challenged to a duel!")
    this.setState({clickedChallenge: true})
  }
  
  clickStart() {
    let mynum = rollDie(6)
		//alert("you rolled: " + mynum)
		this.setState({journeyRoll: mynum})

		this.setState({eventTitle: "The Journey Continues..."})
		this.setState({eventBody: bodyArray[mynum -1]})
		this.setState({clickedStart: true})
    // do the following to enable the journey button
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
    let rebellionLevel = 0;
		
    
    // Below we check the state of key variables to see if a button was clicked and
    // then render the appropirate buttons.
    // The logic that affects the game objects is handled in the methods and
    // functions above.
    
    if (!clickedStart) {
      startBtn = <StartButton onClick={this.clickStart} />
    }
		if (clickedJourney) {
			rollBtn = <RollDice onClick={this.rollDice} />
        //journeyRoll = 1   // <-- this is used for testing
        if (journeyRoll == 1) {
          // crossroads = choice of either inn or encounter
          journeyBtn = <JourneyButton onClick={this.rollJourney} />
          encounterBtn = <EncounterButton onClick={this.rollEncounter} />
        } else if (journeyRoll == 2) {
          // inn or bypass
          journeyBtn = <JourneyButton onClick={this.rollJourney} />
          innBtn = <InnButton onClick={this.rollInn} />
        } else if (journeyRoll == 3) {
          // lost
          journeyBtn = <JourneyButton onClick={this.rollJourney} />
        } else if (journeyRoll == 4) {
          // Encounter.  No journey button here
          encounterBtn = <EncounterButton onClick={this.rollEncounter} />
        } else if (journeyRoll == 5) {
          // Challenge or Encounter
          if (rebellionLevel > 3) {
            // go to challenge
          } else {
            // go to encounter
            encounterBtn = <EncounterButton onClick={this.rollEncounter} />
          }
          journeyBtn = <JourneyButton onClick={this.rollJourney} />
        } else if (journeyRoll == 6) {
          // Challenge or Traitors
          if (rebellionLevel > 3) {
            // render a button that takes the player to the Challenge
            let newTitle = "Journey - A Challenge!"
          } else {
            // Either render a button that takes the player to the Traitors event
            // or just send them there?
            journeyBtn = <JourneyButton onClick={this.rollJourney} />
          }
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
			<div>{/* React components must have a wrapper node/element */}
        <div className="form-group"> {/* class is reserved in JS, so className must be used */}
					<img src={GrailLogo} /> { /* Notice no quotes ("") for the src expression */ }
				</div>
				<h1 id="myH1">{this.state.eventTitle}</h1>
				<h2 id="myh2">{this.state.eventBody}</h2>
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
