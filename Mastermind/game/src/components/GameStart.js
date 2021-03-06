import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//The intoductory page of the application which
// allows you to start the game.
class GameStart extends Component {

  render() {
    return (
      <div className="container text-center">
        <h1 className="text-center">Mastermind</h1>
        <br/>
        <Link to="/play"><button className="btn btn-primary">Start Game</button></Link>
      </div>
    );
  }
}

export default GameStart;
