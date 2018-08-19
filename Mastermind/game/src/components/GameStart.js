import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class GameStart extends Component {

  render() {
    return (
      <div class="container text-center">
        <h1 class="text-center">Mastermind</h1>
        <br/>
        <Link to="/play"><button class="btn btn-primary">Start Game</button></Link>
      </div>
    );
  }
}

export default GameStart;
