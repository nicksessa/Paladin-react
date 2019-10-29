import React, { Component } from 'react';
import Navbar from './Navbar';
/*import Container from './Container';*/
import Wrapper from './Wrapper';
import Footer from './Footer';
import Banner from './Banner';
import Card from "./Card";
import cards from '../images/images.json';

// Main App
class PaladinGame extends Component {
    state = {
        score: 0,
        highScore: 0
    }

    render() {
        const state = this.state;
        return (
            <div>
                <Navbar
                    score={state.score}
                    highScore={state.highScore}
                />

                {/* <Wrapper>
                </Wrapper> */}
                <Footer />
            </div>
        )
    }
}

export default PaladinGame;