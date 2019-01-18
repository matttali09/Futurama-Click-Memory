import React from 'react';
import "./style.css";


function Navbar(props) {
    return (
  <nav>
    <div className="nav-wrapper">
      <ul className="">
        <li>Clicky Game!</li>
        <li>{props.status}</li>
        <li>Score: {props.score} | High-Score: {props.topScore}</li>
      </ul>
    </div>
  </nav>
    );
};

export default Navbar;