import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchUserData } from "../../actions/fetchUserData";
import Navbar from "../../components/navbar/navbar";

class MainPage extends Component {
  componentWillMount() {
    // this.props.getUserData();
  }

  render() {
    return (
      <div>
        <Navbar currentUser={this.props.currentUser} />
        {this.props.children}
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
)(MainPage);
