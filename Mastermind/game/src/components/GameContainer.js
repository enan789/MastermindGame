import React, { Component } from 'react';
import GameStart from './GameStart';
import GamePlay from './GamePlay';

class GameContainer extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div class="container">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">The Mastermind Game</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Game</a></li>
              <li><a href="#">Scores</a></li>
            </ul>
          </div>
        </nav>

        <div>
          <GameStart/>
          <GamePlay/>
        </div>
      </div>
    );
  }
}


export default GameContainer;
