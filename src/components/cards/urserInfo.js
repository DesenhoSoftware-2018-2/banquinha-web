import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const fb = require("../../assets/img/facebook.png");
const insta = require("../../assets/img/instagram.png");
const lkdin = require("../../assets/img/linkedin.png");
const tt = require("../../assets/img/twitter.png");

class UserInfo extends Component{

    constructor(props) {
        super(props);
        this.state={}
    }
    
    render(){
        const currentUser = this.props.currentUser;        
        return(
            <div className="col s10 m7 left">
                <div className="card horizontal hoverable card-profile">
                <div className="card-image">
                    <img className="responsive-img img-profile" alt="perfil" src={currentUser.image} />
                    <div className="social-networks">
                        <a href={"https://www.facebook.com/" + currentUser.facebook}><img className="img-profile" src={fb} alt="cubo"/></a>
                        <a href={"https://www.instagram.com/" + currentUser.instagram}><img className="img-profile" src={insta} alt="cubo"/></a>
                        <a href={"https://www.linkedin.com/" + currentUser.linkedin}><img className="img-profile" src={lkdin} alt="cubo"/></a>
                        <a href={"https://twitter.com/" + currentUser.twitter}><img className="img-profile" src={tt} alt="cubo"/></a>
                    </div>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5>{currentUser.name} {currentUser.lastName}</h5>
                        <h6>{currentUser.job}</h6>
                        <div className="profile-bio">
                        <p>{currentUser.bio}</p>
                        </div>
                    </div>
                    <div className="card-action">
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

UserInfo.propTypes = {
    currentUser: PropTypes.object,
}

UserInfo.defaultProps = {
    currentUser: {},
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps) (UserInfo);