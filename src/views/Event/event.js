import React, { Component } from "react";
import MainPage from "../MainPage/mainPage";
import EventDetails from "../../components/event/eventDetails";

class Event extends Component {
  render() {
    const event = this.props.location.state.event;
    return (
      <div>
        <MainPage>
          <EventDetails event={event} />
        </MainPage>
      </div>
    );
  }
}
export default Event;
