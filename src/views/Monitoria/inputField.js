import React, { Component } from 'react';

class InputField extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A ' + this.state.value + 'Was submited');
    event.preventDefault();
  }


  render() {
    return(
      <label>
        {this.props.placeholder}
        <input type={this.props.type} value={this.state.value} onChange={this.handleChange} />
      </label>
    );
  }
}

export default InputField;
