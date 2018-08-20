import React, { Component } from 'react';
import CodeForm from './CodeForm';

class GamePlay extends Component {
  constructor(){
    super();
    this.code = [];
    this.right = 0;
    this.wrongPlace = 0;
    this.turnsLeft = 10;
  }

  componentWillMount() {
    this.code = [1,2,5,8]
  }

  randomizeCode() {
    for(i=0; i < 4; i++) {

      var num = Math.floor(Math.random() * 10)

      while(this.code.includes(num)){
        num = Math.floor(Math.random() * 10)
      }

      this.code.push(num);
    }
  }

  checkCode(form) {
    this.right = 0;
    this.wrongPlace = 0;

    for(i=0; i < 4; i++){
      if (code[i]==form[i]){
        this.right +=1;
      } else if(this.code.includes(form[i])) {
        this.wrongPlace +=1;
      }
    }

    if( this.right == 4){
      this.win();
    } else if(turn == 0) {
      this.lose();
    } else {
      turn -= 1;
    }
  }

  onSubmit = fields => {
    console.log('Recieved: ', fields);
    var inputs = []
    inputs.push(fields.d1)
    inputs.push(fields.d2)
    inputs.push(fields.d3)
    inputs.push(fields.d4)
    console.log(inputs)


  }

  win(){
    console.log('win');
  }

  lose(){
    console.log('win');
  }

  render() {
    return (
      <div class="container">
        <div>
          <h2 class="text-center">Guess the Code Number</h2>
          <h3 class="text-center">Digits do not repeat</h3>
        </div>
        <br/>
        <CodeForm onSubmit={fields => this.onSubmit(fields)}/>
      </div>
    );
  }
}

export default GamePlay;
