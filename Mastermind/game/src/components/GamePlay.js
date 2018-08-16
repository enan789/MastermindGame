import React, { Component } from 'react';

class GamePlay extends Component {

  render() {
    return (
      <div class="container">
        <div>
          <h2 class="text-center">Guess the Code Number</h2>
          <h3 class="text-center">Digits do not repeat</h3>
        </div>
        <br/>

        <form>
          <div>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
          </div>
          <div>
            <button class="btn btn-primary">Enter Code</button>
          </div>
        </form>

      </div>
    );
  }
}

export default GamePlay;
