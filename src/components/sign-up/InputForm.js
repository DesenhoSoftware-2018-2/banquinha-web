import React, { Component } from "react";

class InputForm extends Component {
  render() {
    return (
      <div className="input-field">
          <input
            id={this.props.name}
            type={this.props.type}
            onChange={this.props.handleChange}
            class="validate"
          />
          <label for={this.props.name}>{this.props.placeholder}</label>
      </div>
    );
  }
}

export default InputForm;
