import React from 'react';
import loader from '../shared/Login/loader.gif';
import Upload from '../shared/Upload';


const ProfileDisplay = (props) => {
    // let style = {
    //     banner :{
    //         position: 'absolute',
    //         top: 0,
    //         left: 0,
    //         right: 0,
    //         width: '100%',
    //         zIndex: 0
    //     }
    // }

    let userImage = props.user.picture ? props.user.picture : loader;

    console.log(props.user.profile_background);
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
                </div>
            </div>
        </div>
    );
};

export default ProfileDisplay;