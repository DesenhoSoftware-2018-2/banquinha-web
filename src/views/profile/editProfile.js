import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";
import MainPage from "../MainPage/mainPage";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:{
                name: "",
                lastName: "",
                username: "",
                email: "",
                job: "",
                image: "",
                facebook: "",
                instagram: "",
                linkedin: "",
                twitter: "",
                bio: "",
            }
        }
    }

    handleInputChange(e, target){
        let user = this.state.user;
        user[target] = e.target.value;
        this.setState({
            user: user
        })
    }

    componentDidMount() {
        document.querySelectorAll('.form');
        M.updateTextFields();
    }

    render(){
        const currentUser = this.props.currentUser;

        if(this.state.user.name === "" && currentUser.name !== "" ){
            this.setState({
                user: currentUser
            })
        }
        return(
            <div>
                <MainPage>
                <div className="row container profile-form">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input 
                                        color="blue" 
                                        value={this.state.user.name} 
                                        onChange={(e) => this.handleInputChange(e, "name")}
                                        id="name" 
                                        type="text" 
                                        className="validate" />
                                    <label className="active" htmlFor="first_name">Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input 
                                        value={`${this.state.user.lastName}`} 
                                        onChange={(e) => this.handleInputChange(e, "lastName")}
                                        id="last_name" 
                                        type="text" 
                                        className="validate" />
                                    <label className="active" htmlFor="last_name">Sobrenome</label>
                                </div>
                                <div className="input-field col s6">
                                    <input 
                                        value={`${this.state.user.username}`}
                                        onChange={(e) => this.handleInputChange(e, "username")}
                                        id="username" 
                                        type="text" 
                                        className="validate" />
                                    <label className="active" htmlFor="username">Nome de Usuário</label>
                                </div>
                                <div className="input-field col s6">
                                    <input 
                                        value={`${this.state.user.job}`} 
                                        onChange={(e) => this.handleInputChange(e, "job")}
                                        id="job" 
                                        type="text" 
                                        className="validate" />
                                    <label className="active" htmlFor="job">Emprego</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input 
                                        value={`${this.state.user.email}`} 
                                        onChange={(e) => this.handleInputChange(e, "email")}
                                        id="email" 
                                        type="email" 
                                        className="validate" />
                                    <label className="active" htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <input 
                                        value="teste"
                                        onChange={(e) => this.handleInputChange(e, "password")}
                                        id="password"
                                        type="password"
                                        className="validate" />
                                    <label htmlFor="password">Senha</label>
                                </div>
                            </div>
                            <li class="divider"></li>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea 
                                        value={`${this.state.user.bio}`}
                                        onChange={(e) => this.handleInputChange(e, "bio")}
                                        id="textarea2" 
                                        className="materialize-textarea" 
                                        data-length="240"></textarea>
                                    <label htmlFor="textarea2">Biografia</label>
                                </div>
                            </div>
                            <div className="row">
                            <div className="input-field col s6">
                                    <input 
                                        value={`${this.state.user.facebook}`}
                                        onChange={(e) => this.handleInputChange(e, "facebook")}
                                        id="facebook" 
                                        type="text" 
                                        className="validate" />
                                    <label className="active" htmlFor="facebook">Facebook</label>
                                </div>
                                <div className="input-field col s6">
                                    <input 
                                        value={`${this.state.user.linkedin}`} 
                                        onChange={(e) => this.handleInputChange(e, "linkedin")}
                                        id="linkedin" 
                                        type="text" 
                                        className="validate" />
                                    <label className="active" htmlFor="linkedin">Linkedin</label>
                                </div>
                                <div className="input-field col s6">
                                    <input 
                                        value={`${this.state.user.instagram}`} 
                                        onChange={(e) => this.handleInputChange(e, "instagram")}
                                        id="instagram" 
                                        type="text" 
                                        className="validate" />
                                    <label className="active" htmlFor="instagram">Instagram</label>
                                </div>
                                <div className="input-field col s6">
                                    <input 
                                        value={`${this.state.user.twitter}`} 
                                        onChange={(e) => this.handleInputChange(e, "twitter")}
                                        id="twitter" 
                                        type="text" 
                                        className="validate" />
                                    <label className="active" htmlFor="twitter">Twitter</label>
                                </div>
                            </div>
                            <li class="divider"></li>
                            <div className="row btn-form">
                                <Link to="/perfil" className="waves-effect waves-light btn save-button">Salvar</Link>
                                <Link to="/perfil" className="waves-effect waves-light btn">Cancelar</Link>
                            </div>  
                        </form>
                    </div>
                    </MainPage>
                </div>
    );
  }
}

EditProfile.PropTypes = {
  currentUser: PropTypes.object
};

EditProfile.defaultProps = {
  currentUser: {}
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(EditProfile);
