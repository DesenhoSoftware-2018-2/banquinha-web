import React, { Component } from "react";
import { Link } from "react-router-dom";

class EventDetails extends Component {
  render() {
    return (
      <div className="row">
        <div
          className="col l6 offset-l3 s12 m8 offset-m2"
          style={{ marginTop: 50 }}
        >
          <div className="card">
            <div className="card-image">
              <img alt="img" src={this.props.event.image} />
              <span className="card-title">{this.props.event.name}</span>
            </div>
            <div className="card-content">
              <h5 className="orange-text">Descrição</h5>
              <p>{this.props.event.content}</p>
              <h5 className="orange-text">Dia</h5>
              <p>{this.props.event.date}</p>
              <h5 className="orange-text">Mentor</h5>
              <p>{`${this.props.event.mentor.first_name} ${this.props.event.mentor.last_name}`}</p>
              <p>{this.props.event.mentor.email}</p>
              <h5 className="orange-text">TAG's</h5>
              <p>{}</p>
            </div>
            <div className="card-action">
              <a href="#1">Não quero</a>
              <Link
                to={{ pathname: "/event", state: { event: this.props.event } }}
              >
                Quero!
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EventDetails;
