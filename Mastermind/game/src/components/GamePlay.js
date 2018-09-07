import React, { Component } from 'react';
import CodeForm from './CodeForm';
import LoseScreen from './LoseScreen';
import ScoreForm from './ScoreForm';

class GamePlay extends Component {
  //Constructs all the important game imporant values
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

  //initializes the random code and creates manipulatable form
  componentWillMount() {
    this.randomizeCode();

    this.codeForm = (<CodeForm onSubmit={fields => this.onSubmit(fields)}/>)
  }

  //A life cycle that refreshes most of the most changing html to improve
  //efficiency
  componentWillUpdate() {
    //Creates checks for correct choices
    if(this.state.right === 0) {
      this.checks = (<div>None Correct</div>)
    } else {
      let iter = [...Array(this.state.right).keys()]
      this.checks = iter.map(() => {
        return ( <i className="fa fa-check"></i> );
      });
    }
    if(this.state.wrongPlace === 0) {
      this.circles = (<div></div>)
    }
    else {
      let iter2 = [...Array(this.state.wrongPlace).keys()]
      this.circles = iter2.map(() => {
        return ( <i className="fa fa-circle"></i> );
      });
    }

  }

  //Uses random to create 4 unique random single digits
  randomizeCode() {
    let tempCode = []
    for(var i=0; i < 4; i++) {

      var num = Math.floor(Math.random() * 10).toString()

      while(tempCode.includes(num)){
        num = Math.floor(Math.random() * 10).toString()
      }

      tempCode.push(num);
    }
    this.state.code = tempCode;
  }

  //The main game cycle function that runs on submission.
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
      if (this.state.code[i] === inputs[i]) {
        this.state.right += 1;
        console.log('right ', this.state.right)
        rightNums.push(this.state.code[i]);
      }
      //This is my attmpt to implment numbers that are in the in the code but in
      //the wrong place

      //Otherwise if the number is somewhere else in the array
      //If the number was right before or later, or not already counted,
      else if(this.state.code.includes(inputs[i])) {
        console.log('is included')
        if( !rightNums.includes(inputs[i]) && !wrongPlaceNums.includes(inputs[i])) {
          console.log('Not in existing arrays')
          this.state.wrongPlace += 1;
          wrongPlaceNums.push(inputs[i])
        }
      }

      else {
        /*console.log(inputs[i], this.state.code, this.state.code.includes(inputs[i]))
        this.state.code.forEach((num) => {
          console.log(num == inputs[i])
          console.log(num.toString() === inputs[i])
        })*/
      }

    }
    //Now check if the wrongPlace numbers appeared later
    wrongPlaceNums.forEach((num) => {
      console.log('the number appears later')
      if( rightNums.includes(num) ) {
        this.state.wrongPlace -= 1;
      }
    })

    console.log(this.state);
    //console.log(inputs, this.state.code)

    if( this.state.right == 4){
      this.win();
    } else if(this.state.turnsLeft == 0) {
      this.lose();
    } else {
      this.state.turnsLeft -= 1;
    }

    console.log(this.state.turnsLeft)
  }

  //converts the form of the inputs into an array
  onSubmit = fields => {
    var inputs = []
    inputs.push(fields.d1)
    inputs.push(fields.d2)
    inputs.push(fields.d3)
    inputs.push(fields.d4)
    this.checkCode(inputs);
  }

  //changes the statee when a player wins
  win(){
    this.setState({
      result: 'win',
      score: this.state.turnsLeft * 100,
    })

  }

  //changes the state when the player lose
  lose(){
    this.setState({result: 'lose'})
  }

  render() {
    var resultScreen;

    if (this.state.result == 'win') {
      resultScreen = (
        <div className="column text-center">
          <h3> You Win! </h3>
          <h4> Score: {this.state.score}</h4>
        </div>
      )
    }
    var loseScreen = (<LoseScreen code={this.state.code}/>);
    var winScreen = (<ScoreForm score={this.state.score}/>);

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
        <div className="rows">
          {this.checks}
          {this.circles}
        </div>
        <div className="rows">
          <div className="d-inline-flex p-2">
            <i className="fa fa-check"></i>
            <div>= Number of correct digits</div>
          </div>
          <div className="d-inline-flex p-2">
            <i className="fa fa-circle"></i>
            <div>= Number of wrongly placed digits</div>
          </div>
        </div>
        <br/>
        <div>
          {(this.state.result == 'lose') ? loseScreen : ''}
          {(this.state.result == 'win') ? winScreen : ''}
        </div>
      </div>
    );
  }
}

export default GamePlay;
