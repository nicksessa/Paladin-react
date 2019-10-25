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
                    <span className="text-left">Sir Roland</span>
                    <br />
                    <span>HP: </span><span id="topDivCharHP" className="bg-danger rounded px-1 pb-1 mr-1">40 </span>
                    <span> of </span><span>45</span>
                </button>
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