import React from 'react';

class ScoreForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      score: this.props.score,
      formErrors: {name: '', score: ''},
      nameValid: false,
      scoreValid: true,
      formValid: false
    }
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let scoreValid = this.state.scoreValid;

    let length = false;
    if(value){
      length = value.length >= 1 && value.length < 20;
    }
    let number = !isNaN(value);

    switch(fieldName) {
      case 'name':
        nameValid = length;
        fieldValidationErrors.d1 = length ? '' : ' is either empty or too long';
        break;
      case 'score':
        scoreValid = number;
        fieldValidationErrors.d2 = length ? '' : ' is not a number';
        break;
      default:
        break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      nameValid: nameValid,
                      scoreValid: scoreValid,
                    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid && this.state.scoreValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.postScore(this.state.name, this.state.score)
  }

  postScore(newName, newScore) {
    fetch('http://localhost:8000/api/scores/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newName,
        score: newScore,
      })
    })
  }

  render() {
    var errors = [];

    for(var key in this.state.formErrors) {
      if(this.state.formErrors.hasOwnProperty(key)) {
        if(this.state.formErrors[key]){
          errors.push(key + ' ' + this.state.formErrors[key]);
        }
      }
    }

    var htmlErrors = errors.map(function(error) {
      return (
        <div>
          {error}
        </div>
      );
    });

    var errorBox = (
      <div className='alert alert-danger'>
        {htmlErrors}
      </div>);

    return (
      <div>
        <div className="column text-center">
          <h3> You Win! </h3>
          <h4> Score: {this.props.score}</h4>
        </div>
        <form>
          <div className="column center-text">
            <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
              <input
                name="name"
                value={this.state.name}
                className="form-control"
                type="text"
                onChange = {(event) => this.handleUserInput(event)}
              />
            </div>
          </div>
          {(this.state.formValid || errors == 0) ? '' : errorBox}
          <div className="container">
            <button onClick={e => this.onSubmit(e)} className="btn btn-primary"
             disabled={!this.state.formValid}>Enter Names</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ScoreForm;
