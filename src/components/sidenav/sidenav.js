import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js"; 
import { Link } from 'react-router-dom'
import "materialize-css/dist/css/materialize.css";
import StarRatingComponent from 'react-star-rating-component';

const background = require('../../assets/img/paisagem.jpeg');
const userImage = require('../../assets/img/person.png');


class SideNav extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          rating: 0
        };
      }
    
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
    
    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});

    }

    render() {
        return(
            <div>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={background} alt="background"/>
                            </div>
                            <a href="#user"><img className="circle" src= {userImage} alt="circle"/></a>
                            <a href="#name"><span className="white-text name">name</span></a>
                            <a href="#email"><span className="white-text email">email</span></a>
                        </div>
                    </li>
                    
                    <div className="center">
                        <StarRatingComponent 
                            name="star_rating" 
                            starCount={5}
                            value={this.state.rating}
                            emptyStarColor="#d3d3d3"
                            renderStarIcon={() => <span><i className="material-icons small">star</i></span>}
                            onStarClick={this.onStarClick.bind(this)}
                            editing={false}
                        />
                    </div>
                    <li>
                        <div className="divider"></div></li>
                    <li><a className="waves-effect" href="#!"><i className="material-icons">account_box</i>Conta</a></li>
                    <li><a className="waves-effect" href="#!"><i className="material-icons">import_contacts</i>Histórico</a></li>
                    <li><a className="waves-effect" href="#!"><i className="material-icons">assessment</i>Relatório</a></li>
                    <li><a className="waves-effect" href="#!"><i className="material-icons">insert_comment</i>Conversa</a></li>
                    <li><a className="waves-effect" href="#!"><i className="material-icons">notifications</i>Notificações</a></li>
                    <li><a className="waves-effect" href="#!"><i className="material-icons">help</i>Ajuda</a></li>
                    <li><a className="waves-effect" href="#!"><i className="material-icons">info</i>Sobre</a></li>
                    <li><a className="waves-effect" href="#!"><i className="material-icons">exit_to_app</i>Sair</a></li>
                </ul>
                <Link to="/menu" data-target="slide-out" className="sidenav-trigger sidenav-button waves-effect">  
                    <i className="material-icons small">menu</i>         
                </Link>           
            </div>
        );
    }
}


export default SideNav;
