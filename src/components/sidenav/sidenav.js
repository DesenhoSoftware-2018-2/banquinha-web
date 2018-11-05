import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js"; 
import "materialize-css/dist/css/materialize.css";

const img1 = require('../../assets/img/paisagem.jpeg');
const img2 = require('../../assets/img/person.png');


class SideNav extends Component{
    
    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});

    }

    render() {
        return(
            <div>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={img1} />
                            </div>
                            <a href="#user"><img className="circle" src= {img2} /></a>
                            <a href="#name"><span className="white-text name">John Doe</span></a>
                            <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li>
                        <div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <a data-target="slide-out" className="sidenav-trigger sidenav-teste pulse waves-effect">  
                    <i className="material-icons small">menu</i>         
                </a>           
            </div>
        );
    }
}


export default SideNav;
