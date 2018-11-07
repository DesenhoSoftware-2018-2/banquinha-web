import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";

const cubo = require("../../assets/img/cubo.jpg");


class ProfileNavbar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            M.Dropdown.init(elems, {});
        });
    }

    render(){
        return(
            <div>
                <nav className="white">
                    <div className="nav-wrapper">
                    <img src={cubo} alt="cubo"/>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a className="orange-text text-darken-4"><i class="far fa-chart-bar"></i></a></li>
                        <li><a className="orange-text text-darken-4"><i class="far fa-comments"></i></a></li>
                        <li><a className="orange-text text-darken-4"><i class="far fa-bell"></i></a></li>
                        <li><a className="dropdown-trigger orange-text text-darken-4" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                    <ul id="dropdown1" class="dropdown-content">
                        <li><a href="#!">one</a></li>
                        <li><a href="#!">two</a></li>
                        <li class="divider"></li>
                        <li><a href="#!">three</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }

} export default ProfileNavbar;