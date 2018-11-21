import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileNavbar from '../components/navbar/profileNavbar';
import UserInfo from '../components/cards/urserInfo';
import UserScore from '../components/cards/userScore';
import UserProgress from '../components/cards/userProgress';
import { FetchUserData } from '../actions/fetchUserData';

class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.getUserData();
    }

    render(){
        return(
            <div>
                <ProfileNavbar />
                <div className="container">
                        <UserInfo />
                </div>
                    <UserScore />
                <div className="container">
                    <UserProgress />
                </div>

            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        userData: state.userData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData() {
            dispatch(FetchUserData());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);