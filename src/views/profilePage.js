import React, { Component } from 'react';
import ProfileNavbar from '../components/navbar/profileNavbar';
import UserInfo from '../components/cards/urserInfo';
import UserScore from '../components/cards/userScore';

class ProfilePage extends Component {

    render(){
        return(
            <div>
                <ProfileNavbar />
                <div className="container">
                        <UserInfo />
                </div>
                    <UserScore />
            </div>
        );
    }

} export default ProfilePage;