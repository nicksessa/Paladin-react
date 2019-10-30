import React from 'react';
import './Footer.css';

const Footer = () => (

    <div className="container-fluid">
    <div className="row">

      <div
        className="footer textBlock-bg pl-3 pt-2  border-bottom-0 border-right-0 bg-dark d-flex flex-wrap d-flex justify-content-end ">
        <button type="button" className="btn btn-dark text-left">Inventory</button>
        <button type="button" className="btn btn-dark text-left" data-toggle="modal" href="#myModal">Character</button>
        <button type="button" className="btn btn-dark text-left">View Log</button>
      </div>
    </div> 
  </div>
)
export default Footer;