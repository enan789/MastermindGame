import React from 'react';

class CodeForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      d1: '',
      d2: '',
      d3: '',
      d4: '',
      formErrors: {d1: '', d2: '', d3: '', d4: ''},
      d1Valid: false,
      d2Valid: false,
      d3Valid: false,
      d4Valid: false,
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
    let d1Valid = this.state.d1Valid;
    let d2Valid = this.state.d2Valid;
    let d3Valid = this.state.d3Valid;
    let d4Valid = this.state.d4Valid;

    let length = false;
    if(value){
      length = value.length == 1;
    }
    let number = !isNaN(value);

    let message = ''

    if(!number){
      message = ' is not a number';
    } else {
      message = length ? '' : ' is not a digit'
    }

    switch(fieldName) {
      case 'd1':
        d1Valid = number && length;
        fieldValidationErrors.d1 = message;
        break;
      case 'd2':
        d2Valid = number && length;
        fieldValidationErrors.d2 = message;
        break;
      case 'd3':
        d3Valid = number && length;
        fieldValidationErrors.d3 = message;
        break;
      case 'd4':
        d4Valid = number && length;
        fieldValidationErrors.d4 = message;
        break;
      default:
        break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      d1Valid: d1Valid,
                      d2Valid: d2Valid,
                      d3Valid: d3Valid,
                      d4Valid: d4Valid,
                    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.d1Valid && this.state.d2Valid
      && this.state.d3Valid && this.state.d4Valid });
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }



  render() {
    var errors = [];

    for(var key in this.state.formErrors) {
      if(this.state.formErrors.hasOwnProperty(key)) {
        if(this.state.formErrors[key]){
          errors.push('Digit ' + key[1] + ' ' + this.state.formErrors[key]);
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
      <form>
        <div className="columns">
          <div className={`form-group ${this.errorClass(this.state.formErrors.d1)}`}>
            <input
              name="d1"
              value={this.state.d1}
              className="form-control"
              type="text"
              onChange = {(event) => this.handleUserInput(event)}
            />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.d2)}`}>
            <input
              name="d2"
              value={this.state.d2}
              className="form-control"
              type="text"
              onChange = {(event) => this.handleUserInput(event)}
            />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.d3)}`}>
            <input
              name="d3"
              value={this.state.d3}
              className="form-control"
              type="text"
              onChange = {(event) => this.handleUserInput(event)}
            />
          </div>
          <div className={'form-group has-error'}>
            <input
              name="d4"
              value={this.state.d4}
              className="form-control"
              type="text"
              onChange = {(event) => this.handleUserInput(event)}
            />
          </div>
        </div>
        {(this.state.formValid || errors == 0) ? '' : errorBox}
        <div className="container">
          <button onClick={e => this.onSubmit(e)} className="btn btn-primary"
           disabled={!this.state.formValid}>Enter Code</button>
        </div>
      </form>
    );
  }
}

export default CodeForm;
