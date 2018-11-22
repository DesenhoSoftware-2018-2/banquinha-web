import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import M from "materialize-css/dist/js/materialize.min.js"; 
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

import "materialize-css/dist/css/materialize.css";
import { FetchUserData } from '../../actions/fetchUserData';

const background = require('../../assets/img/library.jpeg');


class SideNav extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          rating: 0
        };
      }
    
    componentWillMount(){
        this.props.getUserData();
    }  

    onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    }
    
    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});

    }

    render() {
        const currentUser = this.props.currentUser; 
        const stars = ((currentUser.avaliacoes.geral)/10)/2;
        return(
            <div>
                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                            <img src={background} alt="background"/>
                        </div>
                        <Link to="/perfil"><img className="circle" src= {currentUser.image} alt="circle"/></Link>
                        <span className="white-text name name-sidenav">{currentUser.name}</span>
                        <span className="white-text email email-sidenav">{currentUser.email}</span>
                    </div></li>
                    
                    <div className="center">
                        <StarRatingComponent 
                            name="star_rating" 
                            starCount={stars}
                            value={this.state.rating}
                            emptyStarColor="yellow"
                            renderStarIcon={() => <span><i className="material-icons small">star</i></span>}
                            onStarClick={this.onStarClick.bind(this)}
                            editing={false}
                        />
                    </div>
                    <li>
                        <div className="divider"></div></li>
                    <li><Link to="/perfil" className="waves-effect" href="#!"><i className="material-icons">account_box</i>Conta</Link></li>
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

SideNav.propTypes = {
    currentUser: PropTypes.object,
}

SideNav.defaultProps = {
    currentUser: {},
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData(){
            dispatch(FetchUserData());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
