import React from 'react';
import './Navbar.css';

const Navbar = props => (
    <div className="container-fluid">
        <div className="row">
            <div className="bg-dark d-flex flex-wrap topBar p-1 border-left-0 border-top-0">
                <button type="button" className="btn btn-dark" data-toggle="collapse" data-target="#collapseExample"
                    aria-expanded="false" aria-controls="collapseExample">Menu</button>

                <button type="button" className="btn btn-dark text-left">The Grail Quest</button>
                <button data-toggle="modal" href="#myModal" type="button" className="btn btn-dark">
                    <span id="topDivCharName" className="text-left">Sir Roland</span>
                    <br />
                    <span>HP: </span><span id="topDivCurHP" className="bg-danger rounded px-1 pb-1 mr-1">{props.currentHP} </span>
                    <span> of </span><span id="topDivMaxHP">{props.maxHP}</span>
                </button>

                <div className="pt-4 text-center">
                    Piety
                    <br />
                    <span id="topDivPiety">1</span>
                </div>

                <button type="button" className="btn btn-dark text-center">Healing <br /> Potions
                    <br />
                    <span id="topDivPotions">2</span>
                </button>

                <div className="pt-4 pr-2 text-center">
                    Rumors
                    <br />
                    <span id="topDivRumors">3</span>
                </div>

                <div className="pt-2 pr-2 text-center">
                    Rebellion<br />Level
                    <br />
                    <span id="topDivRebellionLevel">1</span>
                </div>

                <div className="pt-0">
                    <span className="text-center pr-2">Turn: </span>
                    <br />
                    <p id="topDivTurnCounter" className="text-center">1</p>
                </div>
            </div>
        </div>
    </div>
);

export default Navbar;