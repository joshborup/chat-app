import React from 'react';
import loader from '../shared/Login/loader.gif'

const ProfileDisplay = (props) => {
    let userImage = props.user.picture ? props.user.picture : loader;
    return (
        <div className='profile-display-container'>
            <div className='custom-banner'>
                <div className='profile-image-container'>
                    <img src={userImage} alt='user image provided by auth0 or social provider'/>
                </div>
            </div>
            <div className='profile-info'>
                <div>
                    {props.user.name}
                </div>
                <div>
                    {props.user.email}
                </div>
            </div>
        </div>
    );
};

export default ProfileDisplay;