import React, { Component } from 'react';
import CodeForm from './CodeForm';
import LoseScreen from './LoseScreen';

class GamePlay extends Component {
  constructor(){
    super();
    this.state = {
      code: [],
      right: 0,
      wrongPlace: 0,
      turnsLeft: 10,
      result: '',
      score: 0,
    };
  }

  componentWillMount() {
    this.randomizeCode();

    this.codeForm = (<CodeForm onSubmit={fields => this.onSubmit(fields)}/>)
  }

  componentWillUpdate() {
    //Creates checks for correct choices
    if(this.state.right == 0) {
      this.checks = (<div>None Correct</div>)
    } else {
      let iter = [...Array(this.state.right).keys()]
      this.checks = iter.map(() => {
        return ( <i className="fa fa-check"></i> );
      });
    }

  }

  randomizeCode() {
    for(var i=0; i < 4; i++) {

      var num = Math.floor(Math.random() * 10)

      while(this.state.code.includes(num)){
        num = Math.floor(Math.random() * 10)
      }

      this.state.code.push(num);
    }
  }

  checkCode(inputs) {
    this.setState({right: 0});
    this.setState({wrongPlace: 0});
    let rightNums = [];
    let wrongPlaceNums = []

    //For each value input
    for(var i = 0; i < 4; i++) {
      console.log('code', this.state.code[i], 'input', inputs[i], )
      //if the number in the same index is the same it is right
      //and save the value into an array
      if (this.state.code[i] == inputs[i]) {
        this.state.right += 1;
        console.log('right ', this.state.right)
        rightNums.push(this.state.code[i]);
      }
      //Otherwise if the number is somewhere else in the array
      //If the number was right before or later, or not already counted,
      /*else if(this.state.code.includes(inputs[i])) {
          if( !rightNums.includes(inputs[i]) && !wrongPlaceNums.includes(inputs[i])) {
            this.state.wrongPlace += 1;
            wrongPlaceNums.push(inputs[i])
          }
      }*/
    }
    //Now check if the wrongPlace numbers appeared later
    /*wrongPlaceNums.forEach((num) => {
      if( rightNums.includes(num) ) {
        this.state.wrongPlace -= 1;
      }
    })*/

    //console.log(this.state);
    //console.log(inputs, this.state.code)
    this.state.turnsLeft -= 1;

    if( this.state.right == 4){
      this.win();
    } else if(this.state.turnsLeft == 0) {
      this.lose();
    }

    console.log(this.state.turnsLeft)
  }

  onSubmit = fields => {
    var inputs = []
    inputs.push(fields.d1)
    inputs.push(fields.d2)
    inputs.push(fields.d3)
    inputs.push(fields.d4)
    this.checkCode(inputs);
  }

  win(){
    this.setState({
      result: 'win',
      score: this.state.turnsLeft * 100,
    })

    console.log('win')
  }

  lose(){
    this.setState({result: 'lose'})
    console.log('lose')
  }

  render() {
    var resultScreen;

    if (this.state.result == 'win') {
      resultScreen = (
        <div class="column text-center">
          <h3> You Win! </h3>
          <h4> Score: {this.state.score}</h4>
        </div>
      )
    }
    var loseScreen = (<LoseScreen code={this.state.code}/>);

    return (
      <div className="container">
        <div>
          <h2 className="text-center">Guess the Code Number</h2>
          <h4 className="text-center">Each box is a digit, and digits do not repeat</h4>
        </div>
        <br/>
        <div className="container text-center">
          Turns Left: {this.state.turnsLeft}
        </div>
        <br/>
        {this.state.result ? '' : this.codeForm}
        <div class="rows">
          {this.checks}
        </div>
        <div class="rows">
          <div class="d-inline-flex p-2">
            <i class="fa fa-check"></i>
            <div>= Number of correct digits</div>
          </div>
        </div>
        <br/>
        <div>
          {(this.state.result == 'lose') ? loseScreen : ''}
        </div>
      </div>
    );
  }
}

export default GamePlay;
