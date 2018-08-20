import React, { Component } from 'react';
import GameStart from './GameStart';
import GamePlay from './GamePlay';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

class GameContainer extends Component {
  gameStart(id){

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-default bg-light">
            <div className="container-fluid">
              <div className="navbar-header">
                The Mastermind Game
              </div>
              <ul className="nav navbar-left">
                <li className="active nav-item">
                  <Link to="/">Game</Link></li>
                <li className="nav-item">
                  <Link to="/play">Scores</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <br/>
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
