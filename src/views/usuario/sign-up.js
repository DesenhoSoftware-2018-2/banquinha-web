import React, { Component } from "react";
import CadastroForm from "../../components/sign-up/cadastroForm";
import MainPage from "../MainPage/mainPage";

class SignUp extends Component {
  render() {
    return (
      <div className="row">
        <MainPage>
          <div
            className="col l6 offset-l3 s12 m8 offset-m2"
            style={{ marginTop: 50 }}
          >
            <form>
              <div className="card large">
                <div className="center" style={{ paddingTop: 50 }}>
                  <span className="card-title center"> Cadastre-se </span>
                  <CadastroForm />
                </div>
              </div>
            </form>
          </div>
        </MainPage>
      </div>
    );
  }
}
export default SignUp;
