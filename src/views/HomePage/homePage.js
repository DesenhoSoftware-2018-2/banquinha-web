import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FetchUserData } from "../../actions/fetchUserData";
import { FetchEvents } from "../../actions/fetchEvents";
import MainPage from "../MainPage/mainPage";
import EventCard from "../../components/cards/eventCard";

import M from "materialize-css/dist/js/materialize.min.js";

class HomePage extends Component {
  componentWillMount() {
    this.props.getUserData();
    this.props.getEvents();
  }

  componentDidMount() {
    var elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {});
  }

  showList() {
    return (
      <div class="carousel">
        {this.props.events.map(event => {
          return (
            <Link to="/a" className="carousel-item">
              <EventCard event={event} />
            </Link>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <MainPage>{this.showList()}</MainPage>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserData() {
      dispatch(FetchUserData());
    },
    getEvents() {
      dispatch(FetchEvents());
    }
  };
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    events: state.events
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
