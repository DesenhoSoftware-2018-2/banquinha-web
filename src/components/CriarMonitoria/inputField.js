import React, { Component } from 'react';

class InputField extends Component {

  render() {
    return(
      <label>
        {this.props.placeholder}
        <input name={this.props.name} type={this.props.type} onChange={this.props.handleChange} />
      </label>
    );
  }
}

export default InputField;
