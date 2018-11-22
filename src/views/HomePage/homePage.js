import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchUserData } from "../../actions/fetchUserData";
import MainPage from "../MainPage/mainPage";

class HomePage extends Component {
  componentWillMount() {
    this.props.getUserData();
  }

  render() {
    console.log(this.props.currentUser);
    return (
      <div>
        <MainPage>
          <h1>BANQUINHA</h1>
        </MainPage>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserData() {
      dispatch(FetchUserData());
    }
  };
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
