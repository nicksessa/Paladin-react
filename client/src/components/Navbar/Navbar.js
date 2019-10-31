import React, { Component } from 'react';
//import $ from 'jquery';
import './Navbar.css';
import CharacterModal from '../Modal'

class Navbar extends Component {
    // state = {
    //     flag: Boolean,
    //     currentHP: this.props.currentHP
    // }
    // health(){
    // if (this.state.currentHP < this.state.maxHP) {
    //     this.state.flag = true
    // } else {
    //     this.state.flag = false
    // }
    // }
    componentDidMount() {
      /* $('#myCollapsible').on('click', 'hidden.bs.collapse', function () {
            alert('#myCollapsible -- hidden.bs.collapse');
        }) */
    }

    render(props) {
        return (


            <div className="container-fluid">
                <div className="row">
                    <div className="bg-dark d-flex flex-wrap topBar p-1 border-left-0 border-top-0">
                        <button type="button" className="btn btn-dark" data-toggle="collapse" data-target="#collapseExample"
                            aria-expanded="false" aria-controls="collapseExample">Menu</button>

                        <button type="button" className="btn btn-dark text-left">The Grail Quest</button>
                        <button data-toggle="modal" href="#myModal" type="button" className="btn btn-dark" >
                            <span id="topDivCharName" className="text-left">{this.props.charName}</span>
                            <br />
                            <span>HP: </span><span id="topDivCurHP" className={`${this.props.flag == true ? 'bg-success' : 'bg-danger'} rounded px-1 pb-1 mr-1`}>{this.props.currentHP} </span>
                            <span> of </span><span id="topDivMaxHP">{this.props.maxHP}</span>
                        </button>

                        <CharacterModal 
                          charName={this.props.charName}
                        />

                        <div className="pt-4 text-center">
                            Piety
                    <br />
                            <span id="topDivPiety">{this.props.piety}</span>
                        </div>

                        <button type="button" className="btn btn-dark text-center">Healing <br /> Potions
                    <br />
                            <span id="topDivPotions">{this.props.healingPotions}</span>
                        </button>

                        <div className="pt-4 pr-2 text-center">
                            Rumors
                    <br />
                            <span id="topDivRumors">{this.props.rumors}</span>
                        </div>

                        <div className="pt-2 pr-2 text-center">
                            Rebellion<br />Level
                    <br />
                            <span id="topDivRebellionLevel">{this.props.rebellionLevel}</span>
                        </div>

                        <div className="pt-0">
                            <span className="text-center pr-2">Turn: </span>
                            <br />
                            <p id="topDivTurnCounter" className="text-center">{this.props.turn}</p>
                        </div>
                    </div>
                </div>
                
{/* <button onClick={(props) => this.props.setState(modalFlag=true)}>hellolllllllllllllll</button> */}
            </div>
        )
    }

}

export default Navbar;