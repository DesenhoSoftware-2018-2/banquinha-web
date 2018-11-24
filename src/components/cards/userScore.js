import React, { Component } from 'react';

const score = require("../../assets/img/score.png");

class UserScore extends Component{

    render(){
        return(
            <div>
                <div className="col s10 m7 right">
                    <div className="card horizontal hoverable score-card">
                        <div className="score-img">
                            <img src={score} alt="cubo"/>
                            <h6 className="center">Pontuação</h6>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <div className="score">
                                    <h3>372 b</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UserScore;