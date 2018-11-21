import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";


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
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="/" className="white-text text-darken-4 orange darken-4">Home</Link></li>
                        <li><Link to="/relatorio" className="orange-text text-darken-4">Relatórios</Link></li>
                        <li><Link to="/historico" className="orange-text text-darken-4">Histórico</Link></li>
                        <li><Link to="/chat" className="orange-text text-darken-4">Conversas</Link></li>
                    </ul>   
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/notificacoes" className="orange-text text-darken-4 tooltipped" data-position="bottom" data-tooltip="Notificações"><i className="far fa-bell"></i></Link></li>
                        <li><Link to="/editPerfil" className="orange-text text-darken-4">Editar</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }

} export default ProfileNavbar;