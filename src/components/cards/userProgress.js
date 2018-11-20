import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 50;

class UserProgress extends Component {

    render(){
        return(
            <div>
                <div className="col s10 m7 left">
                    <div className="card horizontal hoverable progress-total">
                        <div className="card-stacked">
                            <div className="card-content">
                                <span className="card-title progress-title">Avaliações</span>
                                <div className="progress-card">
                                    <div className="progress-item">
                                        <h6 className="center">Monitoria</h6> 
                                        <CircularProgressbar
                                            percentage={percentage}
                                            text={`${percentage}%`}
                                            strokeWidth={4}
                                            styles={{
                                                path: { stroke: `orange` },
                                                text: { fill: 'black', fontSize: '16px' },
                                              }}
                                        />
                                    </div>
                                    <div className="progress-item">
                                    <h6 className="center">Mentorado</h6>
                                        <CircularProgressbar
                                            percentage={percentage}
                                            text={`${percentage}%`}
                                            strokeWidth={4}
                                            styles={{
                                                text: { fill: 'black', fontSize: '16px' },
                                              }}
                                        />
                                    </div>
                                    <div className="progress-item">
                                        <h6 className="center">Conferência</h6>
                                        <CircularProgressbar
                                            percentage={percentage}
                                            text={`${percentage}%`}
                                            strokeWidth={4}
                                            styles={{
                                                path: { stroke: `purple` },
                                                text: { fill: 'black', fontSize: '16px' },
                                              }}
                                        />
                                    </div>
                                    <div className="progress-item">
                                        <h6 className="center">Geral</h6>
                                        <CircularProgressbar
                                            percentage={percentage}
                                            text={`${percentage}%`}
                                            strokeWidth={4}
                                            styles={{
                                                path: { stroke: `green` },
                                                text: { fill: 'black', fontSize: '16px' },
                                              }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default UserProgress;