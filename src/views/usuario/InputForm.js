import React, { Component } from "react";
import MainPage from "../MainPage/mainPage";

class InputForm extends Component {
  render() {
    return (
      <div className="input-field">
        <MainPage>
          <input
            id={this.props.name}
            type={this.props.type}
            onChange={this.props.handleChange}
            class="validate"
          />
          <label for={this.props.name}>{this.props.placeholder}</label>
        </MainPage>
      </div>
    );
  }
}

export default InputForm;
