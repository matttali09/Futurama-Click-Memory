import React from 'react';
import "./style.css";


function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="overlay"></div>
      <h1 className="center">Clicky Game</h1>
      <h3 className="center">Click on an image to earn points, but don't click on any more than once!</h3>
      <img className="top-left" src="assets/images/space-ship.png" alt="Planet Express Ship" />
      <img className="top-right" src="assets/images/space-ship.png" alt="Planet Express Ship" />
      <img className="bottom-left" src="assets/images/space-ship.png" alt="Planet Express Ship" />
      <img className="bottom-right" src="assets/images/space-ship.png" alt="Planet Express Ship" />
    </div>
  );
};

export default Jumbotron;