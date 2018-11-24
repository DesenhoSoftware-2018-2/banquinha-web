import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

class Navbar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var tooltip = document.querySelectorAll(".tooltipped");
      M.Dropdown.init(elems, {});
      M.Tooltip.init(tooltip);
    });
  }

  isLogged() {
    if (this.props.currentUser.email === "") {
      return (
        <li>
          <Link to="/cadastrar" className="orange-text text-darken-4">
            Cadastrar
          </Link>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link
              to="/notificacoes"
              className="orange-text text-darken-4 tooltipped"
              data-position="bottom"
              data-tooltip="Notificações"
            >
              <i className="far fa-bell" />
            </Link>
          </li>
          <li>
            <Link to="/perfil" className="orange-text text-darken-4">
              <img
                className="responsive-img img-profile-navbar"
                alt="perfil"
                src={this.props.currentUser.image}
              />
            </Link>
          </li>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <nav className="white">
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <Link
                  to="/"
                  className="white-text text-darken-4 orange darken-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/relatorio" className="orange-text text-darken-4">
                  Relatórios
                </Link>
              </li>
              <li>
                <Link to="/historico" className="orange-text text-darken-4">
                  Histórico
                </Link>
              </li>
              <li>
                <Link to="/conversas" className="orange-text text-darken-4">
                  Conversas
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="orange-text text-darken-4">
                  Sobre
                </Link>
              </li>
              <li>
                <h4 className="app-title orange-text text-darken-4 brand-logo center">Banquinha</h4>
              </li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.isLogged()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
