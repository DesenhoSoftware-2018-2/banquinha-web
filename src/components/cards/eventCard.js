import React, { Component } from "react";
import { Link } from 'react-router-dom';

class EventCard extends Component {
  render() {
    return (
      <div className="col s10 m7 center">
        <div className="card small hoverable">
          <div className="card-image">
            <img alt="img" src={this.props.event.image} />
            <span className="card-title">{this.props.event.name}</span>
          </div>
          <div className="card-content">
            <p>{this.props.event.content}</p>
          </div>
          <div className="card-action">
            <a href="#1">Não quero</a>
            <Link to={{pathname: "/event", state: { event: this.props.event } }} >Ver Mais! </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default EventCard;