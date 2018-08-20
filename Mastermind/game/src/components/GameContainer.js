import React, { Component } from 'react';
import GameStart from './GameStart';
import GamePlay from './GamePlay';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import PropTypes from "prop-types";

/*GameContainer
  Contains the entire project, implments the navbar and utilizes the BrowserRouter
  It also acts as an entry point for the data.
*/
class GameContainer extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };
  state = {
      data: [],
      loaded: false,
      placeholder: "Loading..."
    };
  componentDidMount() {
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => this.setState({ data: data, loaded: true }));
  }


  render() {
    const { data, loaded, placeholder } = this.state;

    return (
      <BrowserRouter>
        <div>
          <section>
            <div>
              <nav className="navbar navbar-default bg-light">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <Link to="/">The Mastermind Game</Link>
                  </div>
                  <ul className="nav navbar-left">
                    <li className="nav-item">
                      <a href="#scores">Scores</a>
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
            </section>
          <section id="scores">
            {loaded ? this.props.render(data) : <p>{placeholder}</p>}
          </section>
        </div>
      </BrowserRouter>
    );
  }
}


export default GameContainer;
