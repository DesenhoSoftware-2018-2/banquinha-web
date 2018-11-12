import React, { Component } from 'react';

const img = require("../../assets/img/calebe.jpeg");
const fb = require("../../assets/img/facebook.png");
const insta = require("../../assets/img/instagram.png");
const lkdin = require("../../assets/img/linkedin.png");
const tt = require("../../assets/img/twitter.png");

class UserInfo extends Component{

    render(){
        return(
            <div className="col s10 m7 left">
                <div className="card horizontal hoverable card-profile">
                <div class="card-image">
                    <img className="img-profile" src={img} alt="cubo"/>
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
export default UserInfo;