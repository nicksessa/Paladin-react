import React, { Component } from 'react';
import Navbar from './Navbar';
import Wrapper from './Wrapper';
import Footer from './Footer';
import Banner from './Banner';
import Card from "./Card";
import cards from '../images/images.json';
import PC_stats from './data/characterStats';

// Main App
class PaladinGame extends Component {
    state = {
        currentHP: 0,
        maxHP: 0,
        rumors: 0,
        turn: 0,
        healingPotions: 0,
        rebellionLevel: 0,
        piety: 0
    }

    // this function fires basically on page load!
    //  important!  huge!  I have seen the light!
    componentDidMount() {
      console.log(PC_stats.cur_hp)

      this.setState({currentHP: PC_stats.cur_hp})
      this.setState({maxHP: PC_stats.max_hp})
      this.setState({rumors: PC_stats.rumors})
      this.setState({turn: PC_stats.turn})
      this.setState({rebellionLevel: PC_stats.rebellionLevel})
      this.setState({piety: PC_stats.piety})
      this.setState({healingPotions: PC_stats.healingPotions})
    }

    render() {
        const state = this.state;
        return (
            <div>
                <Navbar
                    currentHP={state.currentHP}
                    maxHP={state.maxHP}
                    rumors={state.rumors}
                    piety={state.piety}
                    healingPotions={state.healingPotions}
                    turn={state.turn}
                    rebellionLevel={state.rebellionLevel}

                />

                {<button data-toggle="modal" href="#myModal" type="button" className="btn btn-dark">
                    <span className="text-left">Sir Roland</span>
                    <br />
                    <span>HP: </span><span id="topDivCharHP" className="bg-danger rounded px-1 pb-1 mr-1">test </span>
                    <span> of </span><span>45</span>
                </button>}
                <Footer />
            </div>
        )
    }
}

export default PaladinGame;