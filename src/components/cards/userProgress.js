import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';


class UserProgress extends Component {

    constructor(props) {
        super(props);
        this.state={}
    }

    render(){
        const currentUser = this.props.currentUser;
        const percentMonitoria = currentUser.avaliacoes.monitorias;
        const percentMentorado = currentUser.avaliacoes.mentorado;
        const percentConf = currentUser.avaliacoes.conferencias;
        const percentGeral = currentUser.avaliacoes.geral;

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
                                            percentage={percentMonitoria}
                                            text={`${percentMonitoria}%`}
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
                                            percentage={percentMentorado}
                                            text={`${percentMentorado}%`}
                                            strokeWidth={4}
                                            styles={{
                                                text: { fill: 'black', fontSize: '16px' },
                                              }}
                                        />
                                    </div>
                                    <div className="progress-item">
                                        <h6 className="center">Conferência</h6>
                                        <CircularProgressbar
                                            percentage={percentConf}
                                            text={`${percentConf}%`}
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
                                            percentage={percentGeral}
                                            text={`${percentGeral}%`}
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

UserProgress.propTypes = {
    currentUser: PropTypes.object,
}

UserProgress.defaultProps = {
    currentUser: {},
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps)(UserProgress);