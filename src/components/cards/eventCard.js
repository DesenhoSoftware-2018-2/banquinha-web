import React, { Component } from "react";
import { Link } from 'react-router-dom';

class EventCard extends Component {
  render() {
    return (
      <div className="col s10 m7 center">
        <div className="card small hoverable">
          <div className="card-image">
            <img alt="img" src={this.props.event.image} />
            <span className="card-title black-text card-name">{this.props.event.name}</span>
          </div>
          <div className="card-content orange-text text-darken-4">
            <p>{this.props.event.content}</p>
          </div>
          <div className="card-action">
            <a className="orange-text text-darken-3" href="#1">Não quero</a>
            <Link className="orange-text text-darken-3" to={{pathname: "/event", state: { event: this.props.event } }} >Ver Mais! </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default EventCard;
