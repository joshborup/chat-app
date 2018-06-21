import React from 'react';
import loader from '../shared/Login/loader.gif'

const ProfileDisplay = (props) => {

    let style = {
        banner :{
            background: 'url(http://res.cloudinary.com/saturnslist/image/upload/v1529442385/smaller.jpg)',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed'
        }
    }

    let userImage = props.user.picture ? props.user.picture : loader;
    return (
        <div className='profile-display-container'>
            <div style={style.banner} className='custom-banner'>
                <div className='profile-image-container'>
                    <img src={userImage} alt='user image provided by auth0 or social provider'/>
                </div>
                <div>
                    <h1>{props.user.name}</h1>
                </div>
            </div>
            <div className='profile-info'>
                <div>
                    {props.user.email}
                </div>
            </div>
        </div>
    );
};

export default ProfileDisplay;