import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//The screen that appears when you lose
class LoseScreen extends Component {

  render() {

    if(this.props.code) {
      this.code = this.props.code
    }

    return(
      <div className="column text-center">
        <h2> You Lose </h2>
        <h4> Answer: {this.code}</h4>
        <Link to="/"><button className="btn btn-primary">Try Again?</button></Link>
      </div>);
    };
}

export default LoseScreen;
