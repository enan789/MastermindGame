import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LoseScreen extends Component {

  render() {

    if(this.props.code) {
      this.code = this.props.code
    }

    return(
      <div class="column text-center">
        <h2> You Lose </h2>
        <h4> Answer: {this.code}</h4>
        <Link to="/"><button class="btn btn-primary">Try Again?</button></Link>
      </div>);
    };
}

export default LoseScreen;
