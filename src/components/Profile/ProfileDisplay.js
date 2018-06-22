import React from 'react';
import loader from '../shared/Login/loader.gif';
import Upload from '../shared/Upload';

const ProfileDisplay = (props) => {


    let userImage = props.user.picture ? props.user.picture : loader;

    let email = props.email ? props.email : '';

    return (
        <div className='profile-display-container'>
            <div className='custom-banner'>
                <div className='custom-banner-image'>
                    {props.profileBackground ? <img src={props.profileBackground}/> : <img src={props.user.profile_background}/>}
                </div>
                <div className='profile-image-container'>
                    <img src={userImage} alt='user image provided by auth0 or social provider'/>
                </div>
                <div className='user-name'> 
                    <h1>{props.user.name}</h1>
                </div>
                <Upload className='background-upload-form' uploadedImage={props.uploadedImage} />

            </div>
            <div className='profile-info'>
                <div>
                    {props.user.email}
                    {/* <input name='email' onChange={(e) => props.changeHandler(e.target.name, e.target.value)}  value={email} /> */}
                </div>
            </div>
        </div>
    );
};

export default ProfileDisplay;