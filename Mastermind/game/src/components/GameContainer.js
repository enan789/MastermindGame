import React, { Component } from 'react';
import GameStart from './GameStart';
import GamePlay from './GamePlay';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

class GameContainer extends Component {
  constructor(){
    super();
    this.code = [];
  }

  gameStart(id){

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav class="navbar navbar-default bg-light">
            <div class="container-fluid">
              <div class="navbar-header">
                The Mastermind Game
              </div>
              <ul class="nav navbar-left">
                <li class="active nav-item">
                  <Link to="/">Game</Link></li>
                <li class="nav-item">
                  <Link to="/play">Scores</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <Switch>
              <Route exact strict path="/" component={GameStart}/>
              <Route exact strict path="/play" component={GamePlay}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default GameContainer;
