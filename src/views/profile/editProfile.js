import React, { Component } from 'react';
import ProfileNavbar from '../../components/navbar/profileNavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";

class EditProfile extends Component{

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

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.user.name;
        this.setState({
            [name]: value
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
                <ProfileNavbar />
                <div className="row container profile-form">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input color="blue" value={this.state.user.name} onChange={this.handleInputChange} id="first_name" type="text" className="validate" />
                                    <label className="active" htmlFor="first_name">Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input value={`${this.state.user.lastName}`} id="last_name" type="text" className="validate" />
                                    <label className="active" htmlFor="last_name">Sobrenome</label>
                                </div>
                                <div className="input-field col s6">
                                    <input value={`${this.state.user.username}`} id="username" type="text" className="validate" />
                                    <label className="active" htmlFor="username">Nome de Usuário</label>
                                </div>
                                <div className="input-field col s6">
                                    <input value={`${this.state.user.job}`} id="job" type="text" className="validate" />
                                    <label className="active" htmlFor="job">Emprego</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input value={`${this.state.user.email}`} id="email" type="email" className="validate" />
                                    <label className="active" htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <input value="teste" id="password" type="password" className="validate" />
                                    <label htmlFor="password">Senha</label>
                                </div>
                            </div>
                            <hr className="style14" />
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea value={`${this.state.user.bio}`} id="textarea2" className="materialize-textarea" data-length="240"></textarea>
                                    <label htmlFor="textarea2">Biografia</label>
                                </div>
                            </div>
                            <div className="row">
                            <div className="input-field col s6">
                                    <input value={`${this.state.user.facebook}`} id="facebook" type="text" className="validate" />
                                    <label className="active" htmlFor="facebook">Facebook</label>
                                </div>
                                <div className="input-field col s6">
                                    <input value={`${this.state.user.linkedin}`} id="linkedin" type="text" className="validate" />
                                    <label className="active" htmlFor="linkedin">Linkedin</label>
                                </div>
                                <div className="input-field col s6">
                                    <input value={`${this.state.user.instagram}`} id="instagram" type="text" className="validate" />
                                    <label className="active" htmlFor="instagram">Instagram</label>
                                </div>
                                <div className="input-field col s6">
                                    <input value={`${this.state.user.twitter}`} id="twitter" type="text" className="validate" />
                                    <label className="active" htmlFor="twitter">Twitter</label>
                                </div>
                            </div>
                            <hr className="style14" />
                            <div className="row btn-form">
                                <Link to="/perfil" className="waves-effect waves-light btn save-button">Salvar</Link>
                                <Link to="/perfil" className="waves-effect waves-light btn">Cancelar</Link>
                            </div>  
                        </form>
                    </div>
                </div>
        );
    }
}

EditProfile.PropTypes = {
    currentUser: PropTypes.object,
}

EditProfile.defaultProps = {
    currentUser: {},
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps)(EditProfile);