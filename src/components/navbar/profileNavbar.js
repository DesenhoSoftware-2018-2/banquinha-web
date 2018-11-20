import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";

const cubo = require("../../assets/img/cubo.png");


class ProfileNavbar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var tooltip = document.querySelectorAll('.tooltipped');
            M.Dropdown.init(elems, {});
            M.Tooltip.init(tooltip);
        });
    }
    
    render(){
        return(
            <div>
                <nav className="white">
                    <div className="nav-wrapper">
                    <img className="img-cubo" src={cubo} alt="cubo"/>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a className="orange-text text-darken-4 tooltipped" data-position="bottom" data-tooltip="Relatório"><i className="far fa-chart-bar"></i></a></li>
                        <li><a className="orange-text text-darken-4 tooltipped" data-position="bottom" data-tooltip="Histórico"><i className="far fa-calendar"></i></a></li>
                        <li><a className="orange-text text-darken-4 tooltipped" data-position="bottom" data-tooltip="Conversas"><i className="far fa-comments"></i></a></li>
                        <li><a className="orange-text text-darken-4 tooltipped" data-position="bottom" data-tooltip="Notificações"><i className="far fa-bell"></i></a></li>
                        <li><a className="white-text text-darken-4 orange darken-4 tooltipped edit-icon" data-position="bottom" data-tooltip="Editar"><i className="fas fa-pencil-alt icon-pencil"></i></a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }

} export default ProfileNavbar;