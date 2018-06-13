import React from 'react';

const ProfileDisplay = (props) => {
    console.log('profile-display', props.user);
    return (
        <div className='profile-display-container'>
            {props.user.name}
        </div>
    );
};

export default ProfileDisplay;