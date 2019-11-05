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

                        <div>
                            <table className="table-condensed">
                                <thead>
                                    <tr>
                                        <th className="text-center px-2">
                                            <CharacterModal
                                                charName={this.props.charName}
                                            />
                                            {/* <span id="topDivCharName" className="text-left">{this.props.charName}</span> */}
                                        </th>
                                        <th className="align-bottom">Piety</th>
                                        <th className="align-bottom"><button type="button" className="btn btn-dark text-center align-bottom py-0"><strong>Healing <br /> Potions</strong>
                                        </button></th>
                                        <th className="align-bottom">Money</th>
                                        <th className="align-bottom px-2">Rumors</th>
                                        <th className="align-bottom text-center px-2">Rebellion<br /> Level</th>
                                        <th className="align-bottom">Turn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-2">
                                            <span>HP: </span><span id="topDivCurHP" className={`${this.props.flag == true ? 'bg-success' : 'bg-danger'} rounded px-1 pb-1 mr-1`}>{this.props.currentHP} </span>
                                            <span> of </span><span id="topDivMaxHP">{this.props.maxHP}</span>
                                            {/* <span id="topDivCurHP" className="bg-success rounded px-1 pb-1 mr-1">999 </span>
                            <span> of </span>
                            <span id="topDivMaxHP">999</span> */}
                                        </td>
                                        <td className="text-center"><span id="topDivPiety">{this.props.piety}</span></td>
                                        <td className="text-center"><span id="topDivPotions">{this.props.healingPotions}</span></td>
                                        <td className="text-center"><span id="topDivMoney">{this.props.money}</span></td>
                                        <td className="text-center"><span id="topDivRumors">{this.props.rumors}</span></td>
                                        <td className="text-center"><span id="topDivRebellionLevel">{this.props.rebellionLevel}</span></td>
                                        <td className="text-center"><span id="topDivTurnCounter">{this.props.turn}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <button onClick={(props) => this.props.setState(modalFlag=true)}>hellolllllllllllllll</button> */}
            </div>
        )
    }
}

export default Navbar;