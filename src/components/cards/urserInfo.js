import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
                    <img className="responsive-img" alt="perfil" src={currentUser.image} />
                    <div className="social-networks">
                        <img className="img-profile" src={fb} alt="cubo"/>
                        <img className="img-profile" src={insta} alt="cubo"/>
                        <img className="img-profile" src={lkdin} alt="cubo"/>
                        <img className="img-profile" src={tt} alt="cubo"/>
                    </div>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5>Calebe Rios</h5>
                        <h6>Desenvolvedor</h6>
                        <div className="profile-bio">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Duis porta iaculis rhoncus. Proin tincidunt felis maximus dolor fermentum, 
                        vel pulvinar ligula accumsan. Sed a eleifend nisi. Vivamus id lorem dictum, 
                        porta lacus eu, hendrerit leo. Etiam et libero vitae tortor tincidunt aliquet. 
                        Cras eget justo pharetra, interdum nunc sed, ullamcorper urna. 
                        </p>
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